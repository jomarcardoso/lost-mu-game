import express from "express";
import { engine } from "express-handlebars";
import type postgres from "postgres";
import { SelectCharacterController } from "./controllers/select-character.controller.ts";
import { GameController } from "./controllers/game.controller.ts";
import { CharClassService } from "./services/char-class.service.ts";
import { ItemService } from "./services/item.service.ts";

export class App {
  app = express();

  constructor({ port = 3000, db }) {
    this.config(db);
    this.listen(port);
    this.routing();
    this.loadCharClasses();
  }

  config(db: postgres.Sql) {
    const { app } = this;
    app.use(express.static("public"));
    app.engine("handlebars", engine());
    app.set("view engine", "handlebars");
    app.set("views", "./views");
    app.set("db", db);
    app.use(express.raw());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
  }

  listen(port = 3000) {
    this.app.listen(port);
    console.log(`listen to port ${port}`);
  }

  routing() {
    const { app } = this;
    const createCharacterController = new SelectCharacterController();
    const gameControoler = new GameController();

    app.use(createCharacterController.router, gameControoler.router);
  }

  async loadCharClasses() {
    const { app } = this;
    const sql = app.get("db") as postgres.Sql;
    const charClassService = new CharClassService(sql);
    const charClasses = await charClassService.getAll();

    app.set("charClasses", charClasses);
  }

  async loadItems() {
    const { app } = this;
    const sql = app.get("db") as postgres.Sql;
    const itemService = new ItemService(sql);
    const items = await itemService.getAll();

    app.set("items", items);
  }
}
