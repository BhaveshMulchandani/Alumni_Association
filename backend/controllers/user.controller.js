const usermodel = require('../models/usermodel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { Profile, StudentProfile, AlumniProfile } = require('../models/profilemodel')


const signup = async (req, res) => {

    const { username, email, password, role } = req.body

    if (!username || !email || !password || !role) {
        return res.status(401).json({ message: "missing credentials , enter valid credentials !!" })
    }
    try {

        const existinguser = await usermodel.findOne({ email })

        if (existinguser) {
            return res.status(409).json({ message: "user already exists." })
        }

        const salt = await bcrypt.genSalt(12)
        const hashpassword = await bcrypt.hash(password, salt)

        const user = await usermodel.create({
            username,
            email,
            password: hashpassword,
            role,
            status: "pending"
        })

        return res.status(201).json({
            message: "User created successfully",
            user
        });

    } catch (error) {
        console.log(error);

        return res.status(500).json({ message: "internal server error", error })

    }

}

const login = async (req, res) => {

    const { email, password } = req.body

    if (!email || !password) {
        return res.status(400).json({ message: "missing credentials!!" })
    }

    try {
        const user = await usermodel.findOne({ email })

        if (!user) {
            return res.status(404).json({ message: "enter valid credentilas" })
        }

        const ispassword = await bcrypt.compare(password, user.password)

        if (!ispassword) {
            return res.status(401).json({ message: "enter valid credentials" })
        }

        if (user.status !== "approved") {
            return res.status(403).json({ message: `Your account is ${user.status}. Please contact support.` })
        }

        let token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET)

        res.cookie("token", token, {
            expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
            httpOnly: true,

            secure: true,

            sameSite: "none"
        })

        return res.status(201).json({ message: 'user successfully loggedin !!', role: user.role })

    } catch (error) {
        return res.status(500).json({ message: "internal server error", error })

    }
}

const logout = async (req, res) => {

    res.clearCookie("token")

    return res.status(200).json({ message: "you are loggedout!!" })
}


const admin = async (req, res) => {
    try {
        const existingadmin = await usermodel.findOne({ email: "admin@me.com" })

        if (existingadmin) return res.status(409).json({ message: "admin already exists." })

        const hashpassword = await bcrypt.hash("admin@1234", 12)


        const admin = await usermodel.create({

            username: "Admin",
            email: "admin@me.com",
            password: hashpassword,
            role: "admin"
        })

        res.status(201).json({ message: "admin created successfully" })
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error });
    }
}

const toggleAvailability = async (req, res) => {
    if (req.user.role !== 'alumni') {
        return res.status(403).json({ message: "Only alumni allowed" });
    }
    try {
        const userId = req.user._id;
        const { isAvailable } = req.body;

        const user = await usermodel.findByIdAndUpdate(
            userId,
            { isAvailable },
            { new: true }
        );

        return res.status(200).json({
            message: "Availability updated",
            isAvailable: user.isAvailable
        });

    } catch (error) {
        return res.status(500).json({ message: "internal server error", error });
    }
};

const getme = async (req, res) => {
    return res.status(200).json({
        user: {
            _id: req.user._id,
            username: req.user.username,
            role: req.user.role
        }
    });
};
module.exports = { signup, login, admin, logout, toggleAvailability, getme }