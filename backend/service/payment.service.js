const donationmodel = require('../models/donatemodel')
const paymentmodel = require('../models/paymentmodel')
const Razorpay = require('razorpay');

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET
})

async function createorder(req, res) {

    const { amount, currency = "INR" } = req.body

    try {

        const options = {
            amount: Number(amount) * 100,
            currency
        }

        const order = await razorpay.orders.create(options);

        await paymentmodel.create({

            user: req.user._id,

            orderId: order.id,

            price: {
                amount,
                currency
            },

            status: 'PENDING',
        });

        return res.status(201).json(order);

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message,
            stack: error.stack
        })
    }
}

async function verifyPayment(req, res) {
    const { razorpayOrderId, razorpayPaymentId, signature,amount, donationtype, message } = req.body;
    const secret = process.env.RAZORPAY_KEY_SECRET

    try {
        const { validatePaymentVerification } = require('../node_modules/razorpay/dist/utils/razorpay-utils.js')

        const result = validatePaymentVerification({ "order_id": razorpayOrderId, "payment_id": razorpayPaymentId }, signature, secret);
        if (result) {
            const payment = await paymentmodel.findOne({ orderId: razorpayOrderId });
            payment.paymentId = razorpayPaymentId;
            payment.signature = signature;
            payment.status = 'COMPLETED';
            await payment.save();

            await donationmodel.create({
                price: {
                    amount,
                    currency: 'INR'
                },
                donationtype,
                message,
                donorName: req.user._id
            })
            res.json({ status: 'success' });

        } else {
            res.status(400).send('Invalid signature');
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('Error verifying payment');
    }
}



module.exports = {
    createorder,
    verifyPayment
}


