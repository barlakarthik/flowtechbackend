import Product from '../models/products.model.js';
const getProducts = async (req, res)=>{
    try{
       const products = await Product.find();
       return res.status(200).json(products)
    }catch(error){
        return res.status(500).json({ error: 'Internal server error' })
    }
}
export{
    getProducts
}