var mongoose = require("mongoose"),
    schemas = require("./schemas");

var models = {};

Object.keys(schemas).forEach(function(){
  models[name] = mongoose.model(name, schemas[name]);
});

module.exports = models;