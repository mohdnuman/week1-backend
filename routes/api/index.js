const express=require('express');
const router=express.Router();

router.use('/mcq',require("./mcq.js"));
router.use('/fill',require("./fill.js"));



module.exports=router;