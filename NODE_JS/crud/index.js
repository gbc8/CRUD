import express from "express";
import * as DB from "./config/migration.js";
import databaseConfig from "./config/databaseConfig.js";
import ProductController from './src/controller/ProductController.js';

const app = express();
const PORT = 8080;

app.use(express.json());

DB.populateDatabase();

app.use(ProductController);

app.get("/hello", (req, res) => {
    return res.status(200).json("Hello World!");
})

databaseConfig.authenticate()
.then(() => {
    console.log("Connection has been stablished!");
    app.listen(PORT, () => {
        console.log(`Server started successfully at ${PORT}`);
    });
})
.catch((err) => {
    console.log("Unnable to connect!");
    console.log(err.message);
});

