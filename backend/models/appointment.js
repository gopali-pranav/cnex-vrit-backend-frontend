const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  serviceType: { type: String, required: true },
  slots: [{ startTime: String, endTime: String }],
  numSheets: { type: Number, required: true },
  serviceCharge: { type: Number, required: true },
  image: { type: String },
});

const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment;
