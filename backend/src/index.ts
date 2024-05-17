import { Hono } from "hono";
import userRouter from "./routes/user";
import blogRouter from "./routes/blogs";
import { cors } from "hono/cors";
export const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

app.use("/api/*", cors());
app.route("/api/v1/user", userRouter);

app.route("/api/v1/", blogRouter);

export default app;
