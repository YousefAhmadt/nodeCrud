const express = require('express')
const router = express()

var moment = require('moment');
const Article =require('../models/mydataSchema.js')
const User =require('../models/userSchema.js')

const userController =require('../controllers/userController.js')
router.get('/',userController.index)

router.get('/user/add.html',userController.getAdd)


router.get('/user/view.html',(req,res)=>{
res.render("user/view",{})
})

router.get('/edit/:id',userController.edit)



router.get('/view/:id',userController.view);


router.delete("/delete/:id",userController.deleter);


router.put("/update/:id",userController.update );

router.post('/search',userController.search )

router.post('/user/add.html',userController.add)

module.exports = router