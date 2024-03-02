const express = require('express');
const router = express.Router();

// route products
const { getAllProducts, createProduct, getProductById, deleteProduct,deleteAll, updateProduct } = require('../controllers/productController');

router.get('/getProducts', getAllProducts);
router.post('/createProduct', createProduct);
router.get('/getProduct/:id', getProductById);
router.put('/updateProduct/:id', updateProduct);
router.delete('/deleteProduct/:id', deleteProduct);
router.delete('/comprado',deleteAll)


//route user
const {createUser, login} = require('../controllers/userController')

router.post('/createUser', createUser)
router.post('/login', login)

module.exports = router;
