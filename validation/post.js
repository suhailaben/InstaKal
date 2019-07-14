const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validatePostInput(data) {
 let errors = {};

 data.photo = !isEmpty(data.photo) ? data.photo : '';

 if (Validator.isEmpty(data.photo)) {
   errors.photo = 'Photo field is required';
 }

 return {
   errors,
   isValid: isEmpty(errors)
 };
};
