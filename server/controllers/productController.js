const modelProduct = require('../models/productModel');


const getAllProducts = async (req, res) => {
  try {
    const products = await modelProduct.find();
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener los productos' });
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await modelProduct.findById(id);
    if (!product) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener el producto' });
  }
};

const createProduct = async (req, res) => {
  try {
    const { provedor, name, img, price } = req.body;
    const newProduct = new modelProduct({ provedor, name, img, price });
    await newProduct.save();
    res.status(201).json({ message: 'Producto creado', product: newProduct });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear el producto' });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { provedor, name, img, price } = req.body;
    const updatedProduct = await modelProduct.findByIdAndUpdate(
      id,
      { provedor, name, img, price },
      { new: true }
    );
    if (!updatedProduct) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    res.json({ message: 'Producto actualizado', product: updatedProduct });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al actualizar el producto' });
  }
};

const deleteProduct = async (req, res) => {
    try {
        await modelProduct.findByIdAndDelete(req.params.id)
        res.json({message: "product eliminado"})
    } catch (error) {
        res.status(500).json({message: "error al eliminar"})
    }
};

const deleteAll = async(req,res) => {
    try {
        await modelProduct.deleteMany()
        res.json({message: "Success"})
    } catch (error) {
        res.status(500).json({ message: `Error: ${error}` });
    }
}



module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  deleteAll
};
