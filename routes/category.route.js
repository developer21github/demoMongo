var express     =   require('express');
var router      =   express.Router();
var catControl  =   require("../controller/categoryController");

router.route('/')
    .get(catControl.select)
    .post(catControl.create)
    .delete(catControl.remove)
    .put(catControl.update);

module.exports=router;