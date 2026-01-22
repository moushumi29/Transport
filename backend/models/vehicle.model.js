const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
    vehicle_no: {type: String, required: true, unique: true, uppercase: true},
    driver: {
        name: {type: String, required: true},
        phone: {type: String, required: true},
        license_no: {type: String, required: true}
    },
    owner: {
        name: {type: String, required: true},
        phone: {type: String, required: true},
        address: {type: String},
    },
    last_used_builty: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'builty',
    }
}, { timestamps: true });

module.exports = mongoose.model('vehicle', vehicleSchema);