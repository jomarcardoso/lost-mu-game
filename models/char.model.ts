import type { CharData } from "../dto/char.data.ts";

export class CharModel {
  id?: number;
  name: string;
  charclass_id: number;

  constructor(charData: CharData) {
    this.name = charData.name;
    this.charclass_id = charData.charclass_id;
  }
}
