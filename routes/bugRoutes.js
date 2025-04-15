const bugs=require('../controllers/bugController');
const express=require('express');

const router=express.Router();

router.post('/submit',bugs.submit);
router.get('/getBug',bugs.getBug);

module.exports=router;