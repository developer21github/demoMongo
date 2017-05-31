var express     =   require('express');
var router      =   express.Router();
var prodControl =   require('../controller/productController');

router.route('/')
    .get(prodControl.select)
    .post(prodControl.create)
    .delete(prodControl.remove)
    .put(prodControl.update);

module.exports=router;