import { Routing } from "./routing.ts";
import { Server } from "./server.ts";

class Start {
  constructor() {
    const server = new Server();

    new Routing(server.app);
  }
}

new Start();
