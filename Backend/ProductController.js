const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const InfoRouter = require('./infoschema')
const ImgRouter = require('./imageschema')
const Fruitsrouter = require('./fruitschema')
const multer = require('multer');


// VEGGIES

// insert
let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './main/images')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '_' + Date.now() + file.originalname)
    }

})

let maxSize = 2 * 1000 * 1000;
let upload = multer({
    storage: storage,
    limits: {
        fileSize: maxSize
    }
})
// let uploadHandler = upload.single('file');
router.post("/", upload.single('file'), async (req, res) => {
    console.log(req);
    var data = new InfoRouter({
        Name: req.body.Name,
        Quantity: req.body.Quantity,
        Type:req.body.Type,
        Rupees: req.body.Rupees,
        FixRupees: req.body.FixRupees,
        fileName: req.body.fileName,
        path: req.file.path
    })
    await data.save();
    res.json(data);
   console.log(data);
})


// get
router.get("/", async (req, res) => {
    var findData = await InfoRouter.find();
    res.json(findData);
})


// edit
router.put("/update/:id", upload.single('file'), async (req, res) => {
    console.log(req);
    var upDate = await InfoRouter.updateOne({ _id: req.body._id },
        {
            $set: {
                Name: req.body.Name,
                val: req.body._id,
                Name: req.body.Name,
                Quantity: req.body.Quantity,
                Rupees: req.body.Rupees,
                fileName: req.body.fileName,
                path: req.file.path
            }
        });
    res.json(upDate);
    console.log(upDate)
})

//  delete

router.delete("/delete/:id", async (req, res) => {
    console.log(req)
    var delData = await InfoRouter.findByIdAndRemove(req.params.id).
        then(e => {
            res.json({ message: "successfully" })
        })
})


// ------------------------



// Fruits

// insert
router.post("/fruits",upload.single('file'), async (req, res) => {
        console.log(req);
        var data = new Fruitsrouter({
            Name: req.body.Name,
            Quantity: req.body.Quantity,
            Rupees: req.body.Rupees,
            Type:req.body.Type,
            FixRupees: req.body.FixRupees,
            fileName: req.body.fileName,
            path: req.file.path
        })
        await data.save();
        res.json(data);
       console.log(data);
})

// get

router.get("/fruits", async (req, res) => {
    var findData = await Fruitsrouter.find();
    res.json(findData);
    console.log(findData, "gfg");
})


// edit

router.put("/fruits/:id", upload.single('file'), async (req, res) => {
    console.log(req);
    var upDate = await Fruitsrouter.updateOne({ _id: req.body._id },
        {
            $set: {
                Name: req.body.Name,
                val: req.body._id,
                Name: req.body.Name,
                Quantity: req.body.Quantity,
                Rupees: req.body.Rupees,
                fileName: req.body.fileName,
                path: req.file.path
            }
        });
    res.json(upDate);
    console.log(upDate)
})

//  delete

router.delete("/fruits/:id", async (req, res) => {
    var delData = await Fruitsrouter.findByIdAndRemove(req.params.id).
        then(e => {
            res.json({ message: "successfully" })
        })
})

// ----------------------



// AddtoCart

// insert
router.post("/addcart", async (req, res) => {
    console.log(req.body);
    // const { Name, Quantity, Rupees, FixRupees,fileName,path } = req.body;
    var data = new ImgRouter({
        products: req.body 
    })

    await data.save();
    res.json(data);
    console.log(data, "suc");
})

// get
router.get("/addcart", async (req, res) => {
    var findData = await ImgRouter.find();
    res.json(findData);
    console.log(findData, "gfg");
})


// edit
router.put("/addcart/:id", async (req, res) => {
    console.log(req);
    var upDate = await ImgRouter.updateOne({ _id: req.body._id },
        {
            $set: {
                Quantity: req.body.Quantity,
                Rupees: req.body.Rupees,
            }
        });
    res.json(upDate);
    console.log(upDate)
})


// delete
router.delete("/cartdelete/:id", async (req, res) => {
    console.log(req.body, req.params.id)
    var delData = await ImgRouter.findByIdAndRemove(req.params.id).
        then(e => {
            res.json({ message: "successfully" })
        })
    console.log("succ")
})



module.exports = router;