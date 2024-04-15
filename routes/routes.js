const express = require("express");
const Forgalmazo = require("../models/Forgalmazo");
const Film = require("../models/Film");

const router = express.Router();

// router.post("/", async (req, res) => {
//   const data = new nSideModel({
//     name: req.body.name,
//     foreignKey: req.body.foreignKey,
//   });

//   try {
//     const dataToSave = await data.save();
//     res.status(201).json({ _id: dataToSave._id });
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// router.get("/filmek", async (req, res) => {
//   try {
//     const data = await Film.find();
//     res.json(data);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

router.get("/filmek/:studio", async (req, res) => {
  try {
    const studio = await Forgalmazo.findOne({"Forgalmazo":req.params.studio})
    console.log(studio)
    const filmek = await Film
      .find({ Studio_id: studio._id })
      .populate("Studio_id", "-_id");
      console.log(filmek)
    if (filmek.length !== 0) {
      res.json(filmek);
    } else {
      res
        .status(404)
        .json({ message: "Ebben a Studioban nem találtam filmet." });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// //Update by ID Method
// router.patch("/:id", async (req, res) => {
//   try {
//     const id = req.params.id;
//     const updatedData = req.body;
//     const options = { new: true, runValidators: true };
//     // hogy a frissítés utáni dokumentumot kapjuk vissza
//     const result = await Model.findByIdAndUpdate(id, updatedData, options);
//     if (result) {
//       res.send(result);
//     } else {
//       res
//         .status(400)
//         .json({ message: `${id} azonosítóval nem létezik kilátó!` });
//     }
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// //Delete by ID Method
// router.delete("/:id", async (req, res) => {
//   try {
//     const id = req.params.id;
//     const data = await Model.findByIdAndDelete(id);
//     res.send(`Document with ${data.name} has been deleted..`);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

module.exports = router;
