import type { Express } from "express";

export class Routing {
  app: Express;

  constructor(app: Express) {
    this.app = app;
    this.start();
  }

  start() {
    const app = this.app;

    app.get("/", (req, res) => {
      // res.sendFile("login.html");
      res.render("login");
    });
  }
}
