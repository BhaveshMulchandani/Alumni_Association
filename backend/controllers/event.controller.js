const eventmodel = require("../models/eventmodel");

const createevent = async (req, res) => {

   try {

      const {
         eventname,
         eventdate,
         location,
         eventtype,
         starttime,
         endtime,
         description,
         url
      } = req.body;

      if (
         !eventname ||
         !eventdate ||
         !location ||
         !eventtype ||
         !starttime ||
         !description
      ) {

         return res.status(400).json({
            message: "Please fill all required fields"
         });
      }

      const event = await eventmodel.create({

         eventname,
         eventdate,
         location,
         eventtype,
         starttime,
         endtime,
         description,
         url,

         createdby: req.user._id
      });

      return res.status(201).json({
         message: "Event created successfully",
         event
      });

   } catch (error) {

      return res.status(500).json({
         message: "Internal server error",
         error
      });
   }
};


const getevents = async (req, res) => {

   try {

      const events = await eventmodel
         .find()
         .sort({ createdAt: -1 });

      return res.status(200).json(events);

   } catch (error) {

      return res.status(500).json({
         message: "Internal server error",
         error
      });
   }
};

module.exports = {
   createevent,
   getevents
};