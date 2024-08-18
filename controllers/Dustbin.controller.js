const { validationResult } = require('express-validator');
const Dustbin = require('../models/Dustbin.model');  // Adjust the path as needed

// Add a new Dustbin
exports.addDustbin = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { type, color, filledUp, isDamaged, address, dustbinName, responsiblePerson } = req.body;

    try {
        const newDustbin = new Dustbin({
            type,
            color,
            filledUp,
            isDamaged,
            address,
            dustbinName,
            responsiblePerson
        });
        const savedDustbin = await newDustbin.save();
        res.status(201).json(savedDustbin);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Edit an existing Dustbin by ID
exports.editDustbin = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { id } = req.params;
    const { type, color, filledUp, isDamaged, address, dustbinName, responsiblePerson } = req.body;

    try {
        const updatedDustbin = await Dustbin.findByIdAndUpdate(
            id,
            { type, color, filledUp, isDamaged, address, dustbinName, responsiblePerson },
            { new: true }
        );
        if (!updatedDustbin) {
            return res.status(404).json({ message: 'Dustbin not found' });
        }
        res.status(200).json(updatedDustbin);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a Dustbin by ID
exports.deleteDustbin = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedDustbin = await Dustbin.findByIdAndDelete(id);
        if (!deletedDustbin) {
            return res.status(404).json({ message: 'Dustbin not found' });
        }
        res.status(200).json({ message: 'Dustbin deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a Dustbin by ID
exports.getDustbinById = async (req, res) => {
    const { id } = req.params;

    try {
        const dustbin = await Dustbin.findById(id);
        if (!dustbin) {
            return res.status(404).json({ message: 'Dustbin not found' });
        }
        res.status(200).json(dustbin);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all Dustbins
exports.getAllDustbins = async (req, res) => {
    try {
        const dustbins = await Dustbin.find();
        res.status(200).json(dustbins);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a Dustbin by dustbinName
exports.getDustbinByName = async (req, res) => {
    const { dustbinName } = req.params;

    try {
        const dustbin = await Dustbin.findOne({ dustbinName: dustbinName });
        if (!dustbin) {
            return res.status(404).json({ message: `Dustbin with name ${dustbinName} not found` });
        }
        res.status(200).json(dustbin);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update Dustbin by dustbinName
exports.updateDustbinByName = async (req, res) => {
    const { dustbinName } = req.params;
    const { filledUp, isDamaged } = req.body;

    // Validate request body
    if (typeof filledUp !== 'number' || filledUp < 0 || filledUp > 100) {
        return res.status(400).json({ message: 'Invalid filledUp value. It should be a number between 0 and 100.' });
    }
    if (typeof isDamaged !== 'boolean') {
        return res.status(400).json({ message: 'Invalid isDamaged value. It should be a boolean.' });
    }

    try {
        // Find the dustbin by dustbinName
        const dustbin = await Dustbin.findOne({ dustbinName: dustbinName });
        if (!dustbin) {
            return res.status(404).json({ message: `Dustbin with name ${dustbinName} not found` });
        }

        // Update fields
        dustbin.filledUp = filledUp;
        dustbin.isDamaged = isDamaged;
        dustbin.requestTimeAndDate.push(new Date()); // Add current date to requestTimeAndDate

        // Save the updated dustbin
        const updatedDustbin = await dustbin.save();
        res.status(200).json(updatedDustbin);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
