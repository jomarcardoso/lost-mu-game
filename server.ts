import express from "express";
import { engine } from "express-handlebars";
import type postgres from "postgres";

export class Server {
  app = express();

  constructor({ port = 3000, db }) {
    this.config(db);
    this.listen(port);
  }

  config(db: postgres.Sql) {
    const { app } = this;
    app.use(express.static("public"));
    app.engine("handlebars", engine());
    app.set("view engine", "handlebars");
    app.set("views", "./views");
    app.set("db", db);
  }

  listen(port = 3000) {
    this.app.listen(port);
    console.log(`listen to port ${port}`);
  }
}
