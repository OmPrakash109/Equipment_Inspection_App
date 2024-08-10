const express = require('express');
const router = express.Router();
const {getAllInspectionData, getOneInspectionData, addInspectionData, updateInspectionData, deleteInspectionData} = require('../controllers/InspectionControllers');

router.get('/', getAllInspectionData);

router.get('/:id', getOneInspectionData);

router.post('/', addInspectionData);

router.patch('/:id', updateInspectionData);

router.delete('/:id', deleteInspectionData);

module.exports = router;