const express = require('express');
const router = express.Router();
const { listDoctorsWithFilter } = require('../controllers/doctorController');

router.get('/list-doctor-with-filter', listDoctorsWithFilter);

module.exports = router;