import { Router } from "express";
import { CreateCharacterController } from "./controllers/index.ts";

export class Routing {
  router = Router();

  constructor() {
    this.createCharaterRoutes();
  }

  createCharaterRoutes() {
    const { router } = this;
    const controller = new CreateCharacterController();

    router.post("/create-character", controller.post);

    router.get("/create-character", controller.get);
  }
}
