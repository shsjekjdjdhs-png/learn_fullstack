import { Router } from "express";
import {
  helloController,
  helloController1,
  helloController2,
  helloController3,
  helloController4,
  dynamicHelloController
} from "../controllers/hello-get.controller.js";

const router = Router();

router.get("/one", helloController);
router.get("/two", helloController1);
router.get("/three", helloController2);
router.get("/four", helloController3);
router.get("/five", helloController4);

router.get("/:name", dynamicHelloController);
export default router;
