
const {body , query} = require('express-validator');
exports.createCoure=[
    body('title')
    .notEmpty().withMessage('Title is required')
    .isLength({min:5}).withMessage('Title must be atleast 5 characters'),

    body('price')
    .notEmpty().withMessage('Price is required')
    .isFloat({gt:0}).withMessage('Price must be greater than 0')
]

// get

exports.getCourse = [
  query("title")
  .notEmpty().withMessage("title query required")
];
