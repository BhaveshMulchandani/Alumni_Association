const usermodel = require("../models/usermodel");

const getPendingUsers = async (req, res) => {

   try {

      const users = await usermodel.find({
         status: "pending",
         role: { $ne: "admin" }
      });

      return res.status(200).json(users);

   } catch (error) {

      return res.status(500).json({
         message: "Internal server error"
      });
   }
};


const approveUser = async (req, res) => {

   try {

      const user = await usermodel.findByIdAndUpdate(
         req.params.id,
         {
            status: "approved"
         },
         { new: true }
      );

      return res.status(200).json({
         message: "User approved successfully",
         user
      });

   } catch (error) {

      return res.status(500).json({
         message: "Internal server error"
      });
   }
};


const rejectUser = async (req, res) => {

   try {

      const user = await usermodel.findByIdAndUpdate(
         req.params.id,
         {
            status: "rejected"
         },
         { new: true }
      );

      return res.status(200).json({
         message: "User rejected successfully",
         user
      });

   } catch (error) {

      return res.status(500).json({
         message: "Internal server error"
      });
   }
};

module.exports = {
   getPendingUsers,
   approveUser,
   rejectUser
};