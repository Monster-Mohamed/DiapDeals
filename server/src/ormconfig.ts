import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";
const ormConfig: PostgresConnectionOptions = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "diapdeals",
  password: "123",
  database: "diapdeals",
  synchronize: false,
  entities: [__dirname + "/**/*.entity{.ts,.js}"],
  migrations: [__dirname + "/database/migrations/**/*{.ts,.js}"],
};

export default ormConfig;
