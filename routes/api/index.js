const express=require('express');
const router=express.Router();

router.use('/mcq',require("./mcq.js"));
router.use('/fill',require("./fill.js"));
router.use('/code',require("./code"));



module.exports=router;