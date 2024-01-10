import { Request, Response, Router } from 'express';
import Product from '../model/Product';
import ProductRepository from '../repositories/ProductRepository';

const productRouter = Router();

productRouter.get('/', async (req: Request, res: Response): Promise<Response> => {
    try{
        return res.status(200).json(await ProductRepository.find());
    } catch(error){
        return res.status(400).json(error.message)
    }
});

productRouter.get('/:productId', async (req: Request, res: Response): Promise<Response> => {
    try{
        const { productId } = req.params;
        return res.status(200).json( await ProductRepository.findBy({id: parseInt(productId)}));
    } catch(error){
        return res.status(400).json(error.message)
    }
});

productRouter.post('/', async (req: Request, res: Response): Promise<Response> => {
    try{
        const product: Product = req.body;
        return res.status(200).json( await ProductRepository.save(product));
    } catch(error){
        return res.status(400).json(error.message)
    }
});

productRouter.put('/', async (req: Request, res: Response): Promise<Response> => {
    try{
        const product: Product = req.body;
        return res.status(200).json( await ProductRepository.save(product));
    } catch(error){
        return res.status(400).json(error.message)
    }
});

productRouter.delete('/:productId', async (req: Request, res: Response): Promise<Response> => {
    try{
        const { productId } = req.params;
        return res.status(200).json(await ProductRepository.delete({id: parseInt(productId)}));
    } catch(error){
        return res.status(400).json(error.message)
    }
});

export default productRouter;