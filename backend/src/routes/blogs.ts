import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { verify } from "hono/jwt";

const blog = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();

blog.use("/*", async (c, next) => {
  const auth = c.req.header("Authorization") || "";
  const user = await verify(auth, c.env.JWT_SECRET);
  if (user) {
    c.set("userId", user.id);
    await next();
  } else {
    c.status(403);
    c.json({ message: "Not logged in" });
  }
});

blog.post("/blog", async (c) => {
  const body = await c.req.json();
  const userId = c.get("userId");
  const primsa = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  const post = primsa.post.create({
    data: {
      title: body.title,
      content: body.content,
      authorId: userId,
    },
  });
  return c.json({
    id: (await post).id,
  });
});

blog.put("/blog", async (c) => {
  const body = await c.req.json();

  const userId = c.get("userId");
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const post = await prisma.post.update({
    where: {
      id: body.id,
      authorId: userId,
    },
    data: {
      title: body.title,
      content: body.content,
      published: true,
    },
  });

  return c.json({
    id: post.id,
  });
});

blog.get("/blog/bulk", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const post = await prisma.post.findMany({
    select: {
      content: true,
      title: true,
      id: true,
      author : {
        select :{
          name : true
        }
      }
    },
  });

  return c.json({
    post,
  });
});
blog.get("/blog/:id", async (c) => {
  const id = c.req.param("id");
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const blog = await prisma.post.findUnique({
    where: {
      id,
    },
  });
  return c.json(blog);
});

export default blog;
