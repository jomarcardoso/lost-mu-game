import type { CharModel } from "../models/char.model";

export class CharData {
  id?: number;
  name: string;
  charclass_id: number;

  constructor(charModel: CharModel) {
    this.id = charModel.id;
    this.name = charModel.name;
    this.charclass_id = charModel.charclass_id;
  }
}
