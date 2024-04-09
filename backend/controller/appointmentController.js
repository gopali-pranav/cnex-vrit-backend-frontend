// controllers/appointmentsController.js

const Appointment = require("../models/appointment");

const addAppointment = async (req, res) => {
  try {
    const { serviceType, slots, numSheets, serviceCharge, image } = req.body;

    // Create a new appointment object
    const newAppointment = new Appointment({
      serviceType,
      slots,
      numSheets,
      serviceCharge,
      image,
    });

    // Save the appointment to the database
    const savedAppointment = await newAppointment.save();

    res.status(201).json({ success: true, appointment: savedAppointment });
  } catch (error) {
    console.error("Error adding appointment:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to add appointment" });
  }
};

const getAppointment = async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.status(200).json({ success: true, appointments });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const updateAppointment = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    // Find the appointment by ID and update its fields
    const updatedAppointment = await Appointment.findByIdAndUpdate(
      id,
      updatedData,
      { new: true } // Return the updated document
    );

    if (!updatedAppointment) {
      return res
        .status(404)
        .json({ success: false, message: "Appointment not found" });
    }

    res.status(200).json({ success: true, appointment: updatedAppointment });
  } catch (error) {
    console.error("Error updating appointment:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to update appointment" });
  }
};

// Delete appointment by ID
const deleteAppointment = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedAppointment = await Appointment.findByIdAndDelete(id);
    if (!deletedAppointment) {
      return res.status(404).json({ message: "Appointment not found" });
    }
    res.status(200).json({ message: "Appointment deleted successfully" });
  } catch (error) {
    console.error("Error deleting appointment:", error);
    res.status(500).json({ message: "Failed to delete appointment" });
  }
};

module.exports = {
  addAppointment,
  getAppointment,
  updateAppointment,
  deleteAppointment,
};
