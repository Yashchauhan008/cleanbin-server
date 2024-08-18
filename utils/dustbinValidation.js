const { check } = require('express-validator');

exports.validateDustbin = [
    check('type')
        .isIn(['dry', 'wet'])
        .withMessage('Type must be either dry or wet'),
    check('color')
        .notEmpty()
        .withMessage('Color is required'),
    check('filledUp')
        .isNumeric()
        .withMessage('Filled up must be a number'),
    check('isDamaged')
        .isBoolean()
        .withMessage('Is damaged must be a boolean'),
    check('address')
        .notEmpty()
        .withMessage('Address is required'),
    check('dustbinName')
        .isNumeric()
        .withMessage('Dustbin name must be a number')
        .notEmpty()
        .withMessage('Dustbin name is required'),
    check('responsiblePerson')
        .notEmpty()
        .withMessage('Responsible person is required')
];
