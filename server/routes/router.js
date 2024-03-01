const express = require('express');
const router = express.Router();
const { getAllProducts, createProduct, getProductById, deleteProduct, updateProduct } = require('../controllers/productController');

router.get('/getProducts', getAllProducts);
router.post('/createProduct', createProduct);
router.get('/getProduct/:id', getProductById);
router.put('/updateProduct/:id', updateProduct);
router.delete('/deleteProduct/:id', deleteProduct);

module.exports = router;
