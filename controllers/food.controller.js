const { getFoodByName } = require('../models/food.model');

exports.getFood = (req, res) => {
  const { foodName } = req.params;
  const foodData = getFoodByName(foodName);
  res.render('food', { foodData });
};
