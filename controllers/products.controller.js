import Product from '../models/products.model.js';
const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        return res.status(200).json(products)
    } catch (error) {
        return res.status(500).json({ error: 'Internal server error' })
    }
}
const postProduct = async (req, res) => {
    try {
        const {
            name,
            description,
            category,
            price,
            countInStock,
            imageUrl
        } = req.body;
        const product = new Product({
            name,
            description,
            category,
            price,
            countInStock,
            imageUrl
        });
        product.save().then((result) => {
            res.status(201).json({ result, msg: "product created Successfully" });
        })
            .catch((error) => {
                res.status(500).json({ error: "Failed to create product", message: error.message });
            });
    } catch (error) {
        return res.status(500).json({ error: "Internal server error" })
    }
}
const removeProduct = async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Product deleted successfully" })
    } catch (error) {
        return res.status(500).json({ error: "failed to remove product" })
    }
}
export {
    getProducts,
    postProduct,
    removeProduct
}