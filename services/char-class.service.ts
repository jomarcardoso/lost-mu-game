import { CharClassModel } from "../models/char-class.model.ts";
import { Service } from "../service.ts";

export class CharClassService extends Service {
  async getAll(): Promise<CharClassModel[]> {
    try {
      const data = await this.sql<CharClassModel[]>`SELECT * FROM charclass`;

      return data;
    } catch (error) {
      throw new Error(
        `Failed to fetch records from char_class: ${error.message}`,
      );
    }
  }
}
