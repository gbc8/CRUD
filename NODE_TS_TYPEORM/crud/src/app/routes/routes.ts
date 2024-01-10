import productRouter from '../controllers/ProductController';
import { Router } from 'express';

const routers = Router();

routers.use('/api/product', productRouter);

export default routers;