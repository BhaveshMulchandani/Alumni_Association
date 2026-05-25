const mongoose = require('mongoose');

const DonateSchema = new mongoose.Schema({

    price:{
        amount:{
            type:Number,
            required:true,
        },
        currency:{
            type:String,
            required:true,
            default:'INR'
        }
    },

    donationtype:{
        type:String,
        required:true,
        enum:['scholarship','event','infrastructure','generalfund']
    },

    message:{
        type:String,
        required:false
    },

    donorName:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'user'
    },

    createdAt:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('donation',DonateSchema);