import express from 'express';
import 'dotenv/config'
import mongoose from 'mongoose';
import bodyParser  from 'body-parser';
import cors from 'cors';
import productsData from './data/products.js';
import products from './models/products.model.js';
import router from './router/router.js';
const app = express();
const port = 8080;
const host = '127.0.0.1' || "localhost"
const getData = async()=>{
 try{
    const data = await products.find();
   if(data.length === 0){
       products.create(productsData)
   }
 }catch (error) {
        res.status(500).json({ error: 'unable to dump data' });
}
}
mongoose.connect('mongodb://localhost:27017/auth').then(()=>{
    console.log('db connected')
    getData();
})
app.use(express.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
app.use(cors({
    origin:"*"
}))
app.use('/api', router);
app.listen(port,()=>{
   console.log(`http://${host}:${port}`)
})
