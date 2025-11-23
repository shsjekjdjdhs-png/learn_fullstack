import { Router } from "express";
import {
  helloController,
  helloController1,
  helloController2,
  helloController3,
  helloController4
} from "../controllers/hello.controller.js";

const router = Router();

router.get("/one", helloController);
router.get("/two", helloController1);
router.get("/three", helloController2);
router.get("/four", helloController3);
router.get("/five", helloController4);

router.get("/:name", (req, res) => {
  res.send(`Hello, ${req.params.name}!`);
});
export default router;
