import express from "express";
import path from "path";
import { engine } from "express-handlebars";

export class Server {
  app = express();

  constructor(port = 3000) {
    this.config();
    this.listen(port);
  }

  config() {
    const { app } = this;
    app.use(express.static("public"));
    app.engine("handlebars", engine());
    app.set("view engine", "handlebars");
    app.set("views", "./views");
  }

  listen(port = 3000) {
    this.app.listen(port);
    console.log(`listen to port ${port}`);
  }
}
