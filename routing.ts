import type { Express } from "express";
import { Db } from "./db.ts";

export class Routing {
  app: Express;

  constructor(app: Express) {
    this.app = app;
    this.start();
  }

  start() {
    const app = this.app;

    app.get("/", async (req, res) => {
      const sql = req.app.get("db");

      const db = new Db(sql);

      const data = await db.getAll("char");

      console.log(data);

      res.render("home", {
        data: data.map((item) => item.name),
      });
    });
  }
}
