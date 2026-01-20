const { body } = require("express-validator");

module.exports.createBuiltyValidator = [
  body("builty_no").notEmpty().withMessage("Builty number is required"),
  body("date").notEmpty().withMessage("Date is required"),
  body("vehicle_no")
    .notEmpty()
    .withMessage("Vehicle number is required"),
  body("route.from").notEmpty().withMessage("From location is required"),
  body("route.to").notEmpty().withMessage("To location is required"),
  body("consignor.name")
    .notEmpty()
    .withMessage("Consignor name is required"),
  body("consignee.name")
    .notEmpty()
    .withMessage("Consignee name is required"),
  body("goods.weight")
    .isNumeric()
    .withMessage("Weight must be a number"),
  body("goods.rate")
    .isNumeric()
    .withMessage("Rate must be a number"),
];
