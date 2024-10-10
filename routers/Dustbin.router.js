const express = require('express');
const router = express.Router();
const dustbinController = require('../controllers/Dustbin.controller'); // Adjust the path as needed
const { validateDustbin } = require('../utils/dustbinValidation');

// Route to add a new dustbin
router.post('/add', validateDustbin, dustbinController.addDustbin);

// Route to edit an existing dustbin by ID
router.put('/edit/:id', validateDustbin, dustbinController.editDustbin);

// Route to delete a dustbin by ID
router.delete('/delete/:id', dustbinController.deleteDustbin);

// Route to get a dustbin by ID
router.get('/:id', dustbinController.getDustbinById);

// Route to get all dustbins
router.get('/', dustbinController.getAllDustbins);

// Route to get a dustbin by dustbinName
router.get('/name/:dustbinName', dustbinController.getDustbinByName);

// Route to update a dustbin by dustbinName
router.put('/name/:dustbinName', dustbinController.updateDustbinByName);

module.exports = router;
