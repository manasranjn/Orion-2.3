const express = require('express');
const DataController = require('../controllers/dataController');
const router = express.Router();

router.post('/createData', DataController.createData);
router.get('/getData', DataController.getData);
router.put('/updateData/:id', DataController.updateData);
router.delete('/deleteData/:id', DataController.deleteData);

module.exports = router;
