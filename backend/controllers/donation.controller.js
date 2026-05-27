const donationmodel = require('../models/donatemodel')

const createdonation = async (req, res) => {

    const { price, donationtype, message } = req.body

    // validations
    if (!price || !price.amount || !price.currency || !donationtype) {
        return res.status(400).json({
            message: "Amount, currency and donation type are required"
        })
    }

    // amount validation
    if (price.amount <= 0) {
        return res.status(400).json({
            message: "Amount must be greater than 0"
        })
    }

    try {

        const donation = await donationmodel.create({
            price: {
                amount: price.amount,
                currency: price.currency
            },
            donationtype,
            message,
            donorName: req.user._id
        })

        return res.status(201).json({
            message: "Donation created successfully",
            donation
        })

    } catch (error) {

        return res.status(500).json({
            message: "Internal server error"
        })

    }
}

const getalldonations = async (req, res) => {

    try {

        const donations = await donationmodel
            .find()
            .populate('donorName', 'username email')
            .sort({ createdAt: -1 })

        if (donations.length === 0) {
            return res.status(201).json({
                message: "no donations created yet",
                donations: []
            })
        }

        const totaldonation = donations.reduce(

         (acc, curr) => acc + curr.price.amount,

         0
      );

        return res.status(200).json({
            message: "Donations fetched successfully",
            donations,
            totaldonation
        })

    } catch (error) {

        return res.status(500).json({
            message: "Internal server error"
        })

    }
}

const getdonationbyid = async (req, res) => {

    const { id } = req.params

    // mongo id validation
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({
            message: "Invalid donation id"
        })
    }

    try {

        const donation = await donationmodel
            .findById(id)
            .populate('donorName', 'username email')

        if (!donation) {
            return res.status(201).json({
                message: "Donation not created yet"
            })
        }

        return res.status(200).json({
            message: "Donation fetched successfully",
            donation
        })

    } catch (error) {

        return res.status(500).json({
            message: "Internal server error"
        })

    }
}

const getmydonations = async (req, res) => {

    try {

        const donations = await donationmodel
            .find({ donorName: req.user._id })
            .sort({ createdAt: -1 })

        return res.status(200).json({
            message: "My donations fetched successfully",
            donations
        })

    } catch (error) {

        return res.status(500).json({
            message: "Internal server error"
        })

    }
}

module.exports = { createdonation, getalldonations, getdonationbyid, getmydonations }