export class CharClassModel {
  static readonly CHAR_CLASS_TABLE = "charclass";
  id: number;
  name: string;
  img?: string;
  str: number;
  agi: number;
  vit: number;
  ene: number;
  hp_by_lvl: number;
  mp_by_lvl: number;

  constructor(data: CharClassModel) {
    this.id = data.id;
    this.name = data.name;
    this.img = data.img;
    this.str = data.str;
    this.agi = data.agi;
    this.vit = data.vit;
    this.ene = data.ene;
    this.hp_by_lvl = data.hp_by_lvl;
    this.mp_by_lvl = data.mp_by_lvl;
  }
}
