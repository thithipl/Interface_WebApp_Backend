import knex, { Knex } from "knex";
import { config } from "./config";

const db: Knex = knex(config.db);

export default db;