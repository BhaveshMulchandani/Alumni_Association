const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },

    orderId: {
        type: String,
        required: true,
    },

    paymentId: {
        type: String,
    },

    signature: {
        type: String,
    },

    price: {
        amount: {
            type: Number,
            required: true,
        },

        currency: {
            type: String,
            required: true,
            default: 'INR'
        }
    },

    status: {
        type: String,
        default: 'PENDING',
        enum: ['PENDING', 'COMPLETED', 'FAILED']
    },

}, { timestamps: true });

module.exports = mongoose.model('Payment', paymentSchema);