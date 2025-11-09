import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static("public"));
app.use(cookieParser());
// router imports
import { errorHandler } from "./middlewares/error.middleware.js";
import healthCheckRouter from "./routes/healthcheck.routes.js";
import userRouter from "./routes/auth.routes.js";

app.use("/api/v1/healthcheck", healthCheckRouter);
app.use("/api/v1/user", userRouter);

app.use(errorHandler);

export default app;
