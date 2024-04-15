const mongoose = require("mongoose");

const ForgalmazoSchema = new mongoose.Schema({
  _id: {
    type: Number,
    required: true,
  },
  Forgalmazo: {
    type: String,
    required: true,
    unique: true,
    maxlength: [30, "A név nem tartalmazhat 30 karakternél többet!"],
  },
  Alapitva:{
    type: Number,
    required:true
  },
  Kozpont: {
    type: String,
    required:true,
    unique:true,
    maxlength: [30, "A név nem tartalmazhat 30 karakternél többet!"]
  },
  Kozpont: {
    type: String,
    required:true,
    unique:true,
    maxlength:  [30, "A név nem tartalmazhat 30 karakternél többet!"]
  },
  Logo: {
    type: String,
    required:true,
    unique:true,
    maxlength:  [30, "A név nem tartalmazhat 30 karakternél többet!"]
  }

});

module.exports = mongoose.model(
  "Forgalmazo",
  ForgalmazoSchema,
  "forgalmazok"
);
