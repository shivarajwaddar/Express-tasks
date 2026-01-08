const express = require("express");

const router = express.Router();

const courses = [
  { id: 1, name: "Frontend", description: "HTML, CSS, JS, React" },
  { id: 2, name: "Backend", description: "Node.js, Express, MongoDB" },
];

router.get("/", (req, res) => {
  const list = courses.map((course) => course.name);
  res.status(200).json({
    courses: list,
  });
});

router.get("/:id", (req, res) => {
  const courseId = Number(req.params.id);
  const course = courses.find((course) => course.id === courseId);

  const courseName = course ? course.name : "";

  if (course) {
    res.status(200).json({
      course: courseName,
    });
  } else {
    res.status(400).send("course not found");
  }
});

module.exports = router;
