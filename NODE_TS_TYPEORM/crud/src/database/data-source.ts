import "reflect-metadata";
import { DataSource } from "typeorm";
import { CreateProductTable1704824168265 } from "./migration/1704824168265-CreateProductTable";
import Product from "../app/model/Product";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "admin",
    database: "cruddb",
    synchronize: true,
    logging: false,
    entities: [Product],
    migrations: [CreateProductTable1704824168265],
    subscribers: [],
})
