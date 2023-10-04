import express from 'express';
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
// const fs = require ('fs');
// const path = require('path');
// const jsondata = require('./server/users.json'); 
// async function createFiles(jsondata) {
//     const keysinfo = Object.keys(jsondata);
//     let result={};
//     keysinfo.map(item=>{
//         result = {...result, [item]:[]}
//     })
//   await Promise.all(keysinfo.map(async (keyItem) => {
//     console.log(keyItem);
//     return await Promise.all(jsondata[keyItem]?.workinginfo?.map(async (obj) => {
//       const pathFolder = `C:\\authentic\\backend\\test`;
//       fs.mkdirSync(pathFolder, { recursive: true }, (err) => {
//         err ? err : console.log('successfully created');
//       });
//       const sjbv = path.join(pathFolder, `${obj?.organization}.json`);
//       fs.writeFileSync(sjbv, JSON.stringify(obj), (err) => {
//         if (err) {
//           console.log(err);
//         } else {
//           console.log('folder created successfully');
//         }
//       });
//     }));
//   }));
// }

// createFiles(jsondata);

// import path from 'path';
// const pathname = {
//   dir:'/userserver/controller',
//   root:'ignored',
//   name:'sample.controller',
//   ext:'.ts'
// }
// console.log(path.posix.format(pathname));


//mysql
// import mysql from 'mysql';
// var mysqlConnection = mysql.createConnection({
//     host: "localhost",  
//     port: 8080,
//     user: "root",
//     password: "",
//     database: "test"
// });

// mysqlConnection.connect((err) => {
//     if (!err) {
//         console.log("db connected");
//     } else {
//         console.log(`db not connected ${JSON.stringify(err)}`);
//     }
// });
