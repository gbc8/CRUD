import {Router} from "express";
import ProductService from "../service/ProductService.js";

const router = new Router();

router.get('/product', async (req, res) => {
    return res.status(200).json(await ProductService.findAll());
});

router.get('/product/:id', async (req, res) => {
    const { id } = req.params;
    return res.status(200).json(await ProductService.findById(id));
});

router.post('/product', async (req, res) => {
    return res.status(200).json(await ProductService.insert(req.body));
});

router.put('/product/:id', async (req, res) => {
    const { id } = req.params;
    return res.status(200).json(await ProductService.update(req.body, id));
});

router.delete('/product/:id', async (req, res) => {
    const { id } = req.params;
    return res.status(200).json(await ProductService.delete(id));
});

export default router;