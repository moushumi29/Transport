const builtyModel = require('../models/builty.model');
const builtyService = require('../services/builty.service');
const { validationResult } = require('express-validator');

module.exports.createBuilty = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array() });
        }
        const builty = await builtyService.createBuiltyService(req.body);

        res.status(201).json({
            message: "Builty created successfully",
            builty
        });
    }catch (error) {
        next(error);
    }
};

module.exports.getBuiltyList = async (req, res, next) => {
    try {
        const { page, limit } = req.query;

        const builtyList = await builtyService.getBuiltyListService({ page, limit });
        res.status(200).json(builtyList);
    }catch (error) {
        next(error);
    }
};

module.exports.getBuiltyById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const builty = await builtyService.getBuiltyByIdService(id);
        res.status(200).json(builty);
    }catch (error) {
        next(error);
    }
}

module.exports.updateBuilty = async (req, res, next) => {
    try {
        const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
        const { id } = req.params;
        const data = req.body;
        const updatedBuilty = await builtyService.updateBuiltyService(id, data);
        if (!updatedBuilty) {
      return res.status(404).json({ message: "Builty not found" });
    }
        res.status(200).json({
            message: "Builty updated successfully",
            builty: updatedBuilty
        })
    }catch (error) {
        next(error);
    }
}

module.exports.deleteBuilty = async (req, res, next) => {
    try {
        const { id } = req.params;
        await builtyService.deleteBuiltyService(id);
        res.status(200).json({ message: "Builty deleted successfully" });

    }catch (error) {
        next(error);
    }
}