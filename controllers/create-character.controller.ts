// import { body, validationResult } from "express-validator";
import { CharClassModel } from "../models/char-class.model.ts";
import { CharModel } from "../models/char.model.ts";

export class CreateCharacterController {
  async get(req, res, next) {
    const sql = req.app.get("db");
    const characterModel = new CharClassModel(sql);
    const data = await characterModel.getAll();

    res.render("create-character", {
      data: {
        classes: data.map(({ id, name }) => ({ id, name })),
      },
    });
  }

  post(req, res, next) {
    const sql = req.app.get("db");
    const characterModel = new CharModel(sql);

    characterModel.save(req.body);

    res.render("game");
  }
}
