// import { body, validationResult } from "express-validator";
import { Router } from "express";
import { CharClassModel } from "../models/char-class.model.ts";
import { CharModel } from "../models/char.model.ts";
import type postgres from "postgres";
import { SelectCharacterService } from "../services/select-character.service.ts";

export class SelectCharacterController {
  router = Router();

  constructor() {
    const { router } = this;

    router.post("/select-character", this.post.bind(this));
    router.get("/select-character", this.get.bind(this));
    router.delete("/select-character", this.delete.bind(this));
  }

  async get(req, res, next) {
    const sql = req.app.get("db") as postgres.Sql;
    const characterModel = new CharClassModel(sql);
    const data = await characterModel.getAll();

    const selectCharService = new SelectCharacterService(sql);
    const result = await selectCharService.getAll();

    if (result instanceof Error) {
      console.log(result);

      res.render("error", {
        data: {
          error: result.message,
        },
      });

      return;
    }

    res.render("select-character", {
      data: {
        classes: data.map(({ id, name }) => ({ id, name })),
        chars: result,
      },
    });
  }

  async post(req, res, next) {
    const sql = req.app.get("db") as postgres.Sql;
    const selectCharService = new SelectCharacterService(sql);

    const error = await selectCharService.save(req.body);

    if (error) {
      console.log(error);

      res.render("error", {
        data: {
          error: error.message,
        },
      });

      return;
    }

    res.render("game");
  }

  async delete(req, res, next) {
    console.log("vai delete");
    const sql = req.app.get("db") as postgres.Sql;
    const selectCharService = new SelectCharacterService(sql);
    const error = await selectCharService.remove(req.body);

    if (error) {
      console.log(error);

      res.render("error", {
        data: {
          error: error.message,
        },
      });

      return;
    }

    res.render("select-character");
  }
}
