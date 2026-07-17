const mongoose = require("mongoose");
const schema = mongoose.Schema;


const ObjectId = mongoose.ObjectId;

const UserSchema =  new schema({
    email:{type: String, unique : true},
    password: String,
    firstname:String,
    lastname:String
 })

 const courseSchema = new schema({
    title:String,
    description: String,
    price: Number,  
    imageUrl : String,
    createrId : ObjectId
 })

 const AdminSchema = new schema({
    email:{type: String, unique : true},
    password: String,
    firstname:String,
    secondname:String
 })

 const purchaseSchema = new schema({
    userId: ObjectId,
    courseId: ObjectId
 })

 const userModel = mongoose.model("users", UserSchema);
 const courseModel = mongoose.model("courses", courseSchema);
 const adminModel = mongoose.model("admins", AdminSchema);
 const purchaseModel = mongoose.model("purchases", purchaseSchema);

 module.exports = {
    userModel,
    courseModel,
    adminModel,
    purchaseModel
 } 