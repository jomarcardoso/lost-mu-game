import { Routing } from "./routing.ts";
import { Server } from "./server.ts";
import { SQL } from "./db.ts";

class Start {
  constructor() {
    const server = new Server({ db: SQL });

    new Routing(server.app);
  }
}

new Start();
