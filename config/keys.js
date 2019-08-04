// If you are “production”
if (process.env.NODE_ENV === 'production'){
  // You are going to export “keys_prod”
   module.exports = require('./keys_prod');
  } else {
  // Else, You are going to export “keys_dev”
   module.exports = require('./keys_dev');
  }  