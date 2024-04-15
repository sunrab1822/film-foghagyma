const mongoose = require("mongoose");

function customValidator(num) {
  return num % 1000 == 0;
}

const FilmSchema = new mongoose.Schema({
  _id:{
    type:Number,
    required:true
  },
  Cim_hu: {
    type: String,
    required: [true, "Please add a name"],
    unique: true,
    trim: true,
    lowercase: true,
    maxlength: [50, "Name can not be more than 50 characters!"],
  },
  Studio_id: {
    type: Number,
    required: true,
    ref: "Forgalmazo"
  },
  Bemutato:{
    type: Date,
    default: Date.now

  },
  Hossz: {
    type: Number,
    default: null
  },
  Rendezo: {
    type: String,
    required: true
  }

});

module.exports = mongoose.model("Film", FilmSchema, "filmek"); // ezzel a névvel lesz létrehozva a kollekció.
