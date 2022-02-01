const express=require('express');
const router=express.Router();

const codeController=require('../controllers/code_controller');
router.post('/create',codeController.create);

module.exports=router;