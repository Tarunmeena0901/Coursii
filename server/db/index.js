const mongoose = require('mongoose');
const { type } = require('os');

//defining schema
const userSchema = new mongoose.Schema({
    username : String,
    password : String,
    purchasedCourses : [{type: mongoose.Schema.Types.ObjectId , ref : 'Course'}]
  })
  
  
  const adminSchema =  new mongoose.Schema({
    username : String,
    password : String
  })
  
  const courseSchema = new mongoose.Schema({
    title : String,
    description : String,
    price : Number,
    imageLink : String,
    published : Boolean
  })
  
  //models
  const Admins = mongoose.model('Admins' , adminSchema);
  const Users = mongoose.model('Users', userSchema);
  const Course = mongoose.model('Course', courseSchema);

module.exports = {
    Admins,
    Users,
    Course
}