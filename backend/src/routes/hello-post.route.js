import { Router } from "express";
import { createHelloPost, createUser } from "../controllers/hello-post.controller.js";

const router = Router();

// POST /api/hello-post
router.post("/", createHelloPost);
router.post("/user", createUser);

export default router;
