const BuiltyModel = require("../models/builty.model");

module.exports.createBuiltyService = async ({
  builty_no,
  date,
  vehicle_no,
  route,
  consignor,
  consignee,
  goods,
  charges = {},
  driver,
  owner,
}) => {
  if (
    !builty_no ||
    !date ||
    !vehicle_no ||
    !route?.from ||
    !route?.to ||
    !consignor?.name ||
    !consignee?.name ||
    !goods?.weight ||
    !goods?.rate
  ) {
    throw new Error("All required fields must be provided");
  }

  // 🔒 Server-side calculation (IMPORTANT)
  const freight =
    goods.weight * goods.rate +
    (charges.other_charges || 0);

  const balance = freight - (charges.advance || 0);

  // ✅ Create builty
  const builty = await BuiltyModel.create({
    builty_no,
    date,
    vehicle_no,
    route,
    consignor,
    consignee,
    goods: {
      ...goods,
    },
    charges: {
      ...charges,
      freight,
      balance,
    },
    driver,
    owner,
    status: "CREATED",
  });

  return builty;
};

module.exports.getBuiltyListService = async ({ page = 1, limit = 10 }) => {
  const pageNumber = Number(page) || 1;
  const pageLimit = Number(limit) || 10;
  const skip = (pageNumber - 1) * pageLimit;

  const [data, total] = await Promise.all([
    BuiltyModel.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(pageLimit),
    BuiltyModel.countDocuments(),
  ]);

  return {
    message: "Builty list fetched successfully",
    data,
    total,
    page: pageNumber,
    limit: pageLimit,
  };
};

module.exports.getBuiltyByIdService = async (id) => {
  const builty = await BuiltyModel.findById(id);
  return builty;
}


module.exports.updateBuiltyService = async (id, data) => {
  const goods = data.goods || {};
  const charges = data.charges || {};

  let freight;
  let balance;

  // 🔒 If any financial field is present → recalculate
  if (
    goods.weight !== undefined ||
    goods.rate !== undefined ||
    charges.other_charges !== undefined ||
    charges.advance !== undefined
  ) {
    const weight = Number(goods.weight);
    const rate = Number(goods.rate);
    const otherCharges = Number(charges.other_charges) || 0;
    const advance = Number(charges.advance) || 0;

    if (isNaN(weight) || isNaN(rate)) {
      throw new Error("Weight and rate must be valid numbers");
    }

    freight = weight * rate + otherCharges;
    balance = freight - advance;

    data.goods = {
      ...goods,
    };

    data.charges = {
      ...charges,
      freight,
      balance,
    };
  }

  const updatedBuilty = await BuiltyModel.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });

  return updatedBuilty;
};


module.exports.deleteBuiltyService = async (id) => {
  const builty = await BuiltyModel.findByIdAndDelete(id);
  return builty;
}
