import { Router } from "express";
import { deleteUser } from "../controllers/hello-delete.controller.js";

const router = Router();

// DELETE /api/user/7
router.delete("/:id", deleteUser);

export default router;
