const express = require('express');
const router = express.Router();
const builtyController  = require('../controllers/builty.controller');

const { createBuiltyValidator } = require('../validators/builty.validator');


router.post('/create', createBuiltyValidator, builtyController.createBuilty);
router.get("/list", builtyController.getBuiltyList);
router.get("/getBuiltyById/:id", builtyController.getBuiltyById);
router.put("/update/:id", builtyController.updateBuilty);
router.delete("/delete/:id", builtyController.deleteBuilty);

module.exports = router;