import type postgres from "postgres";

export class Service {
  sql: postgres.Sql;

  constructor(sql: postgres.Sql) {
    this.sql = sql;
  }
}
