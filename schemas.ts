export interface CharClassSchema {
  id: number;
  name: string;
  img?: string;
  str: number;
  agi: number;
  vit: number;
  ene: number;
  hp_by_lvl: number;
  mp_by_lvl: number;
}

export interface ItemTypeSchema {
  id: number;
  name: string;
}

export interface ItemSchema {
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
}

export interface CharClass_ItemSchema {
  id: number;
  charClass_id: number;
  item_id: number;
}

export interface MapSchema {
  id: number;
  name: string;
  img?: string;
}

export interface MobSchema {
  id: number;
  name: string;
  img?: string;
  hp: number;
  def: number;
  min_dmg: number;
  max_dmg: number;
  time_respawn: number;
}

export interface SpotSchema {
  id: number;
  x: number;
  y: number;
  map_id: number;
}

export interface Spot_MobSchema {
  id: number;
  spot_id: number;
  mob_id: number;
  quantity: number;
}

export interface CharSchema {
  id: number;
  name: string;
  charClass_id: number;
}
