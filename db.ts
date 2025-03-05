import postgres from "postgres";

export class Db {
  private sql: postgres.Sql;

  constructor() {
    this.sql = postgres({
      host: "localhost",
      port: 5432,
      database: "lost_mu_game",
      username: "postgres",
      password: "admin",
    });
  }

  async get() {
    const result = await this.sql`SELECT * FROM Item`;
    return result;
  }
}

async function main() {
  const db = new Db();
  const result = await db.get();
  console.log(result);
}

main();
