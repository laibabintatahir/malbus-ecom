import express from 'express';
import { getProduct, postProduct } from '../controller/product.js';
import { imageUpload } from '../multer_config/multer.js';

const productRouter = express.Router();

productRouter.post('/', postProduct);

productRouter.get('/', getProduct);

export default productRouter;
