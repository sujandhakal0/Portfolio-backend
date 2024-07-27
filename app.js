import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import dbConnectin from "./database/dbConnection.js";
import { errorMiddleware } from "./middlewares/error.js";
import messageRouter from './router/messageRouter.js'
import userRouter from './router/userRouter.js'
import timelineRouter from './router/timelineRouter.js'
import applicationRouter from './router/applicationRouter.js'
import skillRouter from './router/skillRouter.js'
import projectRouter from './router/projectRouter.js'


const app = express();
dotenv.config({ path: "./config/config.env" });


// middleware
app.use(
  cors({
    origin: [process.env.PORTFOLIO_URL, process.env.DASHBORD_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(cookieParser())

app.use(express.urlencoded({extended: true }))
app.use(fileUpload({
    useTempFiles:true,
     tempFileDir: "/tmp",
}))
app.use(express.json());
// middleware

app.use("/api/v1/message", messageRouter) 
app.use("/api/v1/user", userRouter);
app.use("/api/v1/timeline", timelineRouter);
app.use("/api/v1/application", applicationRouter);
app.use("/api/v1/skill", skillRouter);
app.use("/api/v1/project", projectRouter);



dbConnectin()
app.use(errorMiddleware)


export default app;
