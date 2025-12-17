const express = require('express');
const dataRoutes = require('./dataRoutes');

const router = express.Router();

router.use('/data', dataRoutes);

module.exports = router;