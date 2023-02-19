
const express = require('express')
const app = express();
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors');
const multer = require('multer');
const path = require('path')




app.use(morgan('dev'))
app.use(express.json());
app.use(cors());

app.use("/main",express.static('main'))
// app.use('/',(req,res)=>{
//     res.json("Kadavuley Kapathu")
// })

const inforouter = require('./ProductController');
// const imagerouter= require('./ProductController')
const req = require('express/lib/request');
app.use("/info", inforouter)
// app.use("/image", imagerouter)

app.listen(3000, () => {
    console.log("server started on 3000")
})

mongoose.set('strictQuery', false);

mongoose.connect('mongodb://127.0.0.1:27017/myfirstdb')
    .then(() => console.log('Connected!'));

// let storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, './public/images')
//     },
//     filename: (req, file, cb) => {
//         cb(null, file.fieldname + '_' + Date.now() + file.originalname)
//     }

// })

// let maxSize = 2 * 1000 * 1000;
// let upload = multer({
//     storage: storage,
//     limits: {
//         fileSize: maxSize
//     }
// })

// let uploadHandler = upload.single('file')
// app.post('/upload', (req, res) => {
//     // console.log(req.file);
//     uploadHandler(req, res, function (err) {
//         console.log(req.file);
//         if (err instanceof multer.MulterError) {
//             if (err.code == 'LIMIT_FILE_SIZE') {
//                 res.status(400).json({ message: "maximum file size" })
//             }
//             return;
//         }
//         if(!req.file){
//             res.status(400).json({message:"No file"})
//         }else{
//             res.status(200).json({message:"Upload to server"})
//         }
//     })
// })


