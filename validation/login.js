const validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateLoginInput(data) {
  let errors = {};
  data.email = !isEmpty(data.email)? data.email : '';
  data.password = !isEmpty(data.password)? data.password : '';

  if (!validator.isEmail(data.email)) {
    errors.email = "email must be formatted correctly (e.g. info@info.com)";
  }

  if (!validator.isLength(data.password, {min: 6, max: 30})) {
    errors.password = "Password must be between 6 and 30 characters";
  }

  if (validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }

  if (validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}