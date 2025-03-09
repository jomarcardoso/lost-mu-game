import type { CharSchema } from "../schemas.ts";
import type { CharClass } from "../entities.ts";
import { Model } from "../model.ts";

export class CharModel extends Model<CharSchema> {
  tableName = "char";
}
