// import { body, validationResult } from "express-validator";
import { Router } from "express";
import { CharClassModel } from "../models/char-class.model.ts";
import { CharModel } from "../models/char.model.ts";

export class GameController {
  router = Router();

  constructor() {
    const { router } = this;

    router.get("/game", this.get.bind(this));
  }

  async get(req, res, next) {
    const sql = req.app.get("db");
    const characterModel = new CharClassModel(sql);
    const data = await characterModel.getAll();

    res.render("game");
  }
}
