const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  indexes: {
    type: Object,
    required: true,
    properties: {
      index1: {
        type: Number,
        required: true
      },
      index2: {
        type: Number,
        required: true
      },
      index3: {
        type: Number,
        required: true
      },
      index4: {
        type: Number,
        required: true
      },
      index5: {
        type: Number,
        required: true
      },
      index6: {
        type: Number,
        required: true
      },
      index7: {
        type: Number,
        required: true
      },
      index8: {
        type: Number,
        required: true
      },
      index9: {
        type: Number,
        required: true
      },
      index10: {
        type: Number,
        required: true
      },
      index11: {
        type: Number,
        required: true
      },
      index12: {
        type: Number,
        required: true
      },
      index13: {
        type: Number,
        required: true
      },
      index14: {
        type: Number,
        required: true
      },
      index15: {
        type: Number,
        required: true
      },
      index16: {
        type: Number,
        required: true
      }
    }
  },

  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Item = mongoose.model("item", ItemSchema);
