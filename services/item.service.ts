import { ItemModel } from "../models/item.model.ts";
import { Service } from "../service.ts";

export class ItemService extends Service {
  async getAll(): Promise<ItemModel[]> {
    try {
      const data = await this.sql<ItemModel[]>`SELECT * FROM item`;

      return data;
    } catch (error) {
      throw new Error(`Failed to fetch records from item: ${error.message}`);
    }
  }
}
