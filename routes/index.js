const express=require('express');
const router=express.Router();

module.exports=router;

const homeController=require('../controllers/home_controller.js');
router.get('/',homeController.home);
router.use('/api',require('./api'));
router.use('/mcq', require('./mcq.js'));
router.use('/fill', require('./fill.js'));
router.use('/code', require('./code.js'));


// router.use('/api',require('./api'));
// router.use('/chat',require('./chat'));