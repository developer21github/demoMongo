var Product     =   require('../models/categoryModel');

exports.select=function (req,res) {
    Product.find(function (err,product) {
        if(err)
            res.send(err);
        res.json(product);
    });
}

exports.create=function (req,res) {
    var product = new Product(req.body);

    var a = 'test'; // to be deleted

    product.save(function (err) {
        if(err)
            res.send(err);
        res.json({message:'Insert Successfullt'});
    });
}

exports.update=function (req,res) {
    Product.findById({_id:req.body._id},function (err,product) {
        if(err)
            res.send(err);
        product.name=req.body.name || product.name;
        product.date=req.body.date || product.date;
        product.price=req.body.price || product.price;

        product.save(function (err) {
            if(err)
                res.send(err);
            res.json({message:'Updated Successfully'});
        });
    });
}

exports.remove=function (req,res) {
    Product.remove({_id:req.body._id},function (err) {
        if(err)
            res.send(err);
        res.json({message:'Remove Successfully'});
    });
}