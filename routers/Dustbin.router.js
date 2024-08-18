const express = require('express');
const router = express.Router();
const dustbinController = require('../controllers/Dustbin.controller');  // Adjust the path as needed
const { validateDustbin } = require('../utils/dustbinValidation');

router.post('/add', validateDustbin, dustbinController.addDustbin);
router.put('/edit/:id', validateDustbin, dustbinController.editDustbin);
router.delete('/delete/:id', dustbinController.deleteDustbin);
router.get('/:id', dustbinController.getDustbinById);
router.get('/', dustbinController.getAllDustbins);

module.exports = router;
