import { App } from "./app.ts";
import { SQL } from "./db.ts";

class Start {
  constructor() {
    new App({ db: SQL });
  }
}

new Start();
