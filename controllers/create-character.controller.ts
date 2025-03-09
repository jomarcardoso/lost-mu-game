// import { body, validationResult } from "express-validator";
import { CharacterModel } from "../models/character.model.ts";

export class CreateCharacterController {
  async get(req, res, next) {
    const sql = req.app.get("db");
    const characterModel = new CharacterModel(sql);
    const data = await characterModel.getAll();

    res.render("create-character", {
      data: {
        classes: data.map(({ id, name }) => ({ id, name })),
      },
    });
  }

  post(req, res, next) {
    res.setHeader("Content-Type", "text/plain");

    const sql = req.app.get("db");
    const characterModel = new CharacterModel(sql);

    console.log(req.body);

    res.send("NOT IMPLEMENTED: Book update GET");
  }
}
