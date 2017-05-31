var Emp        = require('../models/employeeModel');

exports.select=function (req, res) {
    Emp.find(function(err, product) {
        if (err)
            res.send(err);
        res.json(product);
    });
}

exports.remove=function (req,res) {
    Emp.remove({_id:req.body._id},function (err) {
        if(err)
            res.send(err);
        res.json({messgae : "Successfully Employee Deleted" });
    })
}

exports.create=function (req, res) {
    var emp = new Emp();
    emp.pname=req.body.pname;
    emp.name = req.body.name;
    emp.designation=req.body.designation;
    emp.salary=req.body.salary;

    emp.save(function(err) {
        if (err)
            res.send(err);
        res.json({ message: 'Employee created!' });
    });
}

exports.update = function (req, res) {
    Emp.findById({_id: req.body._id}, function (err, emp) {
        if (err)
            res.send(err);
        emp.name = req.body.name || emp.name;
        emp.designation = req.body.designation || emp.designation;
        emp.salary = req.body.salary || emp.salary;

        emp.save(function (err) {
            if (err)
                res.send(err);
            res.json({message: 'Employee updated!'});
        });
    });
}