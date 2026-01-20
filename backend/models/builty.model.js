const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const builtySchema = new mongoose.Schema({
    builty_no: { type: String, required: true, unique: true},
    date: { type: Date, required: true },
    vehicle_no: {type: String, required: true, unique: true},
    route: {
        from: { type: String, required: true },
        to: { type: String, required: true },
        via: { type: String }
    },
    consignor: {
        name: { type: String, required: true },
        address: { type: String, required: true },
        phone: {type: String}
    },
    consignee: {
        name: { type: String, required: true },
        address: { type: String, required: true },
        phone: {type: String}
    },
    goods: {
        no_of_packages: { type: Number},
        category: { type: String },
        weight: {type: Number, required: true},
        rate: { type: Number, required: true},
    },
    charges: {
        freight: { type: Number, required: true },
        other_charges: { type: Number },
        advance: { type: Number },
        balance: { type: Number},
    },
    driver: {
        name: { type: String, required: true },
        phone: { type: String, required: true },
        license_no: { type: String, required: true }
    },
    owner: {
        name: { type: String, required: true },
        phone: { type: String },
    },
    status: {
      type: String,
      enum: ["CREATED", "COMPLETED", "CANCELLED"],
      default: "CREATED",
    },
},
{ timestamps: true}
)

module.exports = mongoose.model('builty', builtySchema);