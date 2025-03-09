export interface CharClass {
  id: number;
  name: string;
  img?: string;
  str: number;
  agi: number;
  vit: number;
  ene: number;
  hpByLvl: number;
  mpByLvl: number;
}

export interface ItemType {
  id: number;
  name: string;
}

export interface Item {
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
  type: ItemType;
  charClasses: CharClass[];
}

export interface GameMap {
  id: number;
  name: string;
  img?: string;
}

export interface Mob {
  id: number;
  name: string;
  img?: string;
  hp: number;
  def: number;
  min_dmg: number;
  max_dmg: number;
  time_respawn: number;
}

export interface SpotMob {
  id: number;
  mob: Mob;
  quantity: number;
}

export interface Spot {
  id: number;
  x: number;
  y: number;
  map: GameMap;
  mobs: SpotMob[];
}

export interface Char {
  id: number;
  name: string;
  charClass: CharClass;
}
