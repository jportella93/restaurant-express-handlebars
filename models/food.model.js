const db = require('../db');

exports.getFoodByName = (name) => db[name];
