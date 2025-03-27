export class ItemModel {
  id: number;
  name: string;
  img?: string;
  def: number;
  min_dmg: number;
  max_dmg: number;
  wiz_dmg: number;
  atk_speed: number;
  req_str: number;
  req_agi: number;
  type_id: number;

  constructor(data: ItemModel) {
    this.id = data.id;
    this.name = data.name;
    this.img = data.img;
    this.def = data.def;
    this.min_dmg = data.min_dmg;
    this.max_dmg = data.max_dmg;
    this.wiz_dmg = data.wiz_dmg;
    this.atk_speed = data.atk_speed;
    this.req_str = data.req_str;
    this.req_agi = data.req_agi;
    this.type_id = data.type_id;
  }
}
