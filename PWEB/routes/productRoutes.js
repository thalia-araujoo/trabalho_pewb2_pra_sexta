import { Router } from 'express';
import { 
    getProductById, 
    listProducts, 
    createProduct,
    updateProduct, 
    deleteProduct } 
from '../controllers/productController.js';

const router = Router();

router.get('/products', listProducts);
router.get('/products/:id', getProductById);
router.post('/products', createProduct);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);

export default router;