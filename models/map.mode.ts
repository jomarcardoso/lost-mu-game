export interface IMap {
  name: string;
}

const MAP: IMap = {
  name: "",
};

export class Map implements IMap {
  name = "";

  constructor(args: IMap = MAP) {
    this.name = args.name;
  }
}
