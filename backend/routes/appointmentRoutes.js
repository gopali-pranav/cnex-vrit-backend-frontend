// routes/appointments.js

const express = require("express");
const router = express.Router();
const appointmentsController = require("../controller/appointmentController");

// Add routes for creating and retrieving appointments
router.post("/", appointmentsController.addAppointment);
router.get("/", appointmentsController.getAppointment);

// Add routes for updating and deleting appointments
router.put("/:id", appointmentsController.updateAppointment);
router.delete("/:id", appointmentsController.deleteAppointment);

module.exports = router;
