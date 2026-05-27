const mongoose = require("mongoose");

const eventschema = new mongoose.Schema({

   eventname: {
      type: String,
      required: true
   },

   eventdate: {
      type: Date,
      required: true
   },

   location: {
      type: String,
      required: true
   },

   eventtype: {
      type: String,
      enum: [
         "College-event",
         "Hackathon",
         "Workshop",
         "Competition",
         "Seminar"
      ],
      required: true
   },

   starttime: {
      type: String,
      required: true
   },

   endtime: {
      type: String
   },

   description: {
      type: String,
      required: true
   },

   url: {
      type: String
   },

   createdby: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user"
   }

}, {
   timestamps: true
});

module.exports = mongoose.model("event", eventschema);