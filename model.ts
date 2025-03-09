import type postgres from "postgres";

export abstract class Model<T extends object> {
  private readonly sql: postgres.Sql;
  protected abstract readonly tableName: string;

  constructor(sql: postgres.Sql) {
    this.sql = sql;
  }

  /**
   * Retrieves all records from the specified table
   * @throws Error if table name is empty
   * @returns Promise with array of records
   */
  async getAll(): Promise<T[]> {
    if (!this.tableName) {
      throw new Error("Table name is required");
    }

    try {
      return this.sql<T[]>`SELECT * FROM ${this.sql(this.tableName)}`;
    } catch (error) {
      throw new Error(
        `Failed to fetch records from ${this.tableName}: ${error.message}`,
      );
    }
  }

  /**
   * Retrieves a single record by ID from the specified table
   * @param id The record ID
   * @throws Error if table name is empty or ID is invalid
   * @returns Promise with single record or null if not found
   */
  async getById(id: number): Promise<T | null> {
    if (!this.tableName) {
      throw new Error("Table name is required");
    }

    if (!id || id <= 0) {
      throw new Error("Valid ID is required");
    }

    try {
      const results = await this.sql<T[]>`
        SELECT *
        FROM ${this.sql(this.tableName)}
        WHERE id = ${id}
        LIMIT 1
      `;

      return results.length ? results[0] : null;
    } catch (error) {
      throw new Error(
        `Failed to fetch record from ${this.tableName}: ${error.message}`,
      );
    }
  }

  async save(data: T): Promise<T> {
    if (!this.tableName) {
      throw new Error("Table name is required");
    }

    try {
      const [result] = await this.sql<T[]>`
        INSERT INTO ${this.sql(this.tableName)} ${this.sql(data)}
        RETURNING *
      `;

      return result;
    } catch (error) {
      throw new Error(
        `Failed to save record to ${this.tableName}: ${error.message}`,
      );
    }
  }
}
