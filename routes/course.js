const express = require("express");
const router = express.Router();
const validate = require("../middlewares/validate");
const { courseValidationRules } = require("../validators/course");
let courses = [];

// router.post("/", courseValidationRules, validate, (req, res) => {
//   const data = req.body;
//   courses.push(data);
//   res.json({
//     success: true,
//     message: "Course added!",
//     course: data,
//   });
// });

router.get('/',validate,(req, res) => {
    res.json({
      success: true,
      query: req.query,
      courses
    });
  }
);

module.exports = router;


