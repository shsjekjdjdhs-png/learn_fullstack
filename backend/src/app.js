import express from "express";
import morgan from "morgan";
import helloGetRoutes from "./routes/hello-get.route.js";
import helloPostRoutes from "./routes/hello-post.route.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());

// REGISTER ROUTES HERE
app.use("/api/hello-get", helloGetRoutes);
app.use("/api/hello-post", helloPostRoutes);

export default app;
