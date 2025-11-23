import express from "express";
import morgan from "morgan";
import helloGetRoutes from "./routes/hello-get.route.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());

// REGISTER ROUTES HERE
app.use("/api/hello", helloGetRoutes);

export default app;
