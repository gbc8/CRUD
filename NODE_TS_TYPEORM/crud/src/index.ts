import { AppDataSource } from "./database/data-source";
import express from 'express';
import cors from 'cors';
import routers from './app/routes/routes';

AppDataSource.initialize().then(async () => {
    const app = express();

    app.use(cors());
    app.use(express.json());

    app.use(routers);
    
    app.listen(8080, () => {
        console.log("Server running at port 8080...");
    });
}).catch(error => console.log(error));
