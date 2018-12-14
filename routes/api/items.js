const express = require("express");
const router = express.Router();

//Item model
const Item = require("../../models/Item");

//get de los items
router.get("/", (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items));
});

// @route   POST api/items
// @desc    Create An Item
// @access  Public
router.post("/", (req, res) => {
  const newItem = new Item({
    name: req.body.name,
    genre: req.body.genre,
    indexes: req.body.indexes,
    index1: req.body.index1,
    index2: req.body.index2,
    index3: req.body.index3,
    index4: req.body.index4,
    index5: req.body.index5,
    index6: req.body.index6,
    index7: req.body.index7,
    index8: req.body.index8,
    index9: req.body.index9,
    index10: req.body.index10,
    index11: req.body.index11,
    index12: req.body.index12,
    index13: req.body.index13,
    index14: req.body.index14,
    index15: req.body.index15,
    index16: req.body.index16
  });

  newItem.save().then(item => res.json(item));
});

module.exports = router;
