const express = require("express");
const router = express.Router();

const vehicleController = require("../controllers/vehicle.controller");

router.get("/list", vehicleController.getVehicleList);
router.get("/details/:vehicleNo", vehicleController.getVehicleDetails);

module.exports = router;