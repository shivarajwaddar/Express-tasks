const express = require("express");

const router = express.Router();

const students = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

router.get("/", (req, res) => {
  const list = students.map((student) => student.name);
  res.status(200).json({
    students: list,
  });
});

router.get("/:id", (req, res) => {
  const studentId = Number(req.params.id);

  const student = students.find((s) => s.id === studentId);

  const studentName = student ? student.name : "";

  if (student) {
    res.status(200).json({
      student: studentName,
    });
  } else {
    res.status(400).send("student not found");
  }
});

module.exports = router;
