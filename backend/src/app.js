import express from "express";
import morgan from "morgan";
import helloGetRoutes from "./routes/hello-get.route.js";
import helloPostRoutes from "./routes/hello-post.route.js";
import helloPutRoutes from "./routes/hello-put.route.js";
import helloDeleteRoutes from "./routes/hello-delete.route.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());

// REGISTER ROUTES HERE
app.use("/api/hello-get", helloGetRoutes);
app.use("/api/hello-post", helloPostRoutes);
app.use("/api/hello-put", helloPutRoutes);
app.use("/api/hello-delete", helloDeleteRoutes);

export default app;
