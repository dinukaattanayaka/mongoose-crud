const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName : {
        type : String,
        required : true
    },
    lastName: {
        type : String,
        required : true 
    },
    birthDate :{
        type : Date,
        required : true  
    },
    age :{
        type : Number
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
})
module.exports=mongoose.model('user',userSchema)