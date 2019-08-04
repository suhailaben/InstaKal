const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validatePostInput(data) {
 let errors = {};

 data.photo = !isEmpty(data.photo) ? data.photo : '';
//  data.text = !isEmpty(data.text) ? data.text : '';

//  Instagram doesn't provide this function below:
//  if (!Validator.isLength(data.text, { min: 10, max: 300 })) {
//    errors.text = 'Post must be between 10 and 300 characters';
//  }

//  if (Validator.isEmpty(data.photo)) {
//    errors.photo = 'Photo field is required';
//  }

 return {
   errors,
   isValid: isEmpty(errors)
 };
};
