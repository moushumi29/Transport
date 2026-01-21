const vehicleModel = require("../models/vehicle.model");
const vehicleService = require("../services/vehicle.service");

module.exports.getVehicleList = async (req, res, next) => {
  try {
    const { page, limit } = req.query;

    const result = await vehicleService.getVehicleListService({
      page,
      limit,
    });

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports.getVehicleDetails = async (req, res, next) => {
  try {
    const { vehicleNo } = req.params;

    const result = await vehicleService.getVehicleDetailsService(vehicleNo);

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
