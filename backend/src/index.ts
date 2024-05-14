import { Hono } from "hono";
import userRouter from "./routes/user";
import blogRouter from "./routes/blogs";
const app = new Hono()


app.route("/api/v1/user", userRouter);

app.route("/api/v1/",blogRouter)

export default app;
