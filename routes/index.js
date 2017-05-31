var express     =   require('express');
var router      =   express.Router();

var catRout     =   require('./category.route');
var prodRout    =   require('./product.route');
var empRout     =   require('./employee.route');

router.use('/category',catRout);
router.use('/product',prodRout);
router.use('/emp',empRout);

module.exports=router;