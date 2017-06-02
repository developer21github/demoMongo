var mongoose     = require('mongoose');
mongoose.Promise = require('bluebird');


var Schema      =   mongoose.Schema;
var ObjectId = Schema.ObjectId;
var empSchema   =   new Schema({
    pname:{type:ObjectId,ref:'Product'},
    name:{type:String,required:true},
    salary:{type:Number,required:true},
    designation:{type:String,required:true},
});
empSchema.pre('find',populateReferences);
function populateReferences(){
    return this.populate('pname', 'name');
}
module.exports = mongoose.model('Employee', empSchema);