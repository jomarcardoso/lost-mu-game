import type postgres from "postgres";
import type { CharClassSchema } from "../schemas.ts";
import type { CharClass } from "../entities.ts";
import { Model } from "../model.ts";

export class CharClassModel extends Model<CharClassSchema> {
  tableName = "charclass";

  // protected toSchema(data: CharClass): CharClassSchema {
  //   return {
  //     id: data.id,
  //     name: data.name,
  //     img: data.img,
  //     str: data.str,
  //     agi: data.agi,
  //     vit: data.vit,
  //     ene: data.ene,
  //     hpByLvl: data.hpByLvl,
  //     mpByLvl: data.mpByLvl,
  //   };
  // }

  // protected toEntity(data: CharClassSchema): CharClass {
  //   return {
  //     id: data.id,
  //     name: data.name,
  //     img: data.img,
  //     str: data.str,
  //     agi: data.agi,
  //     vit: data.vit,
  //     ene: data.ene,
  //     hpByLvl: data.hp_by_lvl,
  //     mpByLvl: data.mp_by_lvl,
  //   };
  // }
}
