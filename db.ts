import postgres from "postgres";

export const SQL = postgres({
  host: "localhost",
  port: 5432,
  database: "lost_mu_game",
  username: "postgres",
  password: "admin",
});

export class Db {
  private sql: postgres.Sql;

  constructor(sql = SQL) {
    this.sql = sql;
  }

  async getAll(table = "") {
    return this.sql`SELECT * FROM ${this.sql(table)}`;
  }
}
