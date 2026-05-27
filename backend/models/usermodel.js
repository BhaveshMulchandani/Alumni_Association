const mongoose = require("mongoose")

const Userschema = new mongoose.Schema({
    username : {
        type:String,
        required : true,
        minlength : 3,
    },
    email : {
        type:String,
        required : true,
        unique:true,
    },
    password : {
        type : String,
        required:true,
    },
    role : { type:String,
        enum : ["student","alumni","admin"]
    },
      isAvailable: {
        type: Boolean,
        default: false
    },
    status :{
        type:String,
        enum : ["pending","approved","rejected"],
        default:"pending"
    }
})

module.exports = mongoose.model("user",Userschema)