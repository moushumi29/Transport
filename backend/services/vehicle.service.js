const VehicleModel = require('../models/vehicle.model');
const BuiltyModel = require('../models/builty.model');

module.exports.upsertVehicleFromBuilty = async (builty) => {
    if( !builty?.vehicle_no ) return;

    await VehicleModel.findOneAndUpdate(
          { vehicle_no: builty.vehicle_no },
    {
      vehicle_no: builty.vehicle_no,
      driver: builty.driver,
      owner: builty.owner,
      last_used_builty: builty._id,
    },
    {
      upsert: true, // 🔥 create if not exists
      new: true,
    }
    );
}

module.exports.getVehicleListService = async ({ page = 1, limit = 10 }) => {
  const skip = (page - 1) * limit;

  const vehicles = await VehicleModel.find()
    .sort({ updatedAt: -1 })
    .skip(skip)
    .limit(limit);

  const total = await VehicleModel.countDocuments();

  return {
    data: vehicles,
    pagination: {
      totalItems: total,
      currentPage: Number(page),
      totalPages: Math.ceil(total / limit),
      pageSize: Number(limit),
    },
  };
};


module.exports.getVehicleDetailsService = async (vehicle_no) => {
  // 1. Get vehicle
  const vehicle = await VehicleModel.findOne({ vehicle_no });

  if (!vehicle) {
    throw new Error("Vehicle not found");
  }

  // 2. Get builties for this vehicle
  const builties = await BuiltyModel.find({ vehicle_no })
    .sort({ createdAt: -1 });

  return {
    vehicle,
    builties,
  };
};
