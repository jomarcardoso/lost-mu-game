import { Routing } from "./routes.ts";
import { Server } from "./app.ts";
import { SQL } from "./db.ts";

class Start {
  constructor() {
    const { app } = new Server({ db: SQL });

    app.use(new Routing().router);
  }
}

new Start();
