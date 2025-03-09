import type { Character } from "../entities/character.ts";
import { Model } from "../model.ts";

export class CharacterModel extends Model<Character> {
  tableName = "charclass";
}
