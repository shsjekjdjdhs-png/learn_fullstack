import { Router } from "express";
import { updateUser } from "../controllers/hello-put.controller.js";

const router = Router();

// PUT /api/user/123
router.put("/:id", updateUser);

export default router;
