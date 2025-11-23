import express from "express";
import morgan from "morgan";
import helloRoutes from "./routes/hello.route.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());

// REGISTER ROUTES HERE
app.use("/api/hello", helloRoutes);

export default app;
