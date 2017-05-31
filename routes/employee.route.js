var express     =   require('express');
var router      =   express.Router();
var empControl  =   require('../controller/employeeController');

router.route('/')
    .get(empControl.select)
    .post(empControl.create)
    .delete(empControl.remove)
    .put(empControl.update);


module.exports=router;