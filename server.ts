import express from 'express';

export class Server {
  app = express();

  constructor(port = 5000) {
    this.listen(port);
  }

  listen(port = 5000) {
    this.app.listen(port);
    console.log(`listen to port ${port}`);
  }
}
