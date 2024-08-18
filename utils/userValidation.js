const { check } = require('express-validator');

exports.validateUser = [
    check('email')
        .isEmail()
        .withMessage('Please provide a valid email address'),
    check('username')
        .notEmpty()
        .withMessage('Username is required'),
    check('role')
        .optional()
        .isIn(['user', 'admin', 'worker'])
        .withMessage('Role must be either user, admin, or worker')
];
