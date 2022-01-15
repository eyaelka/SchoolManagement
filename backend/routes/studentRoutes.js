const express = require("express");
const router = express.Router();
const studentController = require ("../controllers/studentController")

const multer = require("multer");


const upload = multer({ dest: './public/images'});

router.get("", studentController.getStudentsData);

router.get("/:id", studentController.getStudentById);

router.post("/search", studentController.searchStudent);

router.put("/:id", upload.single("studentImage"), studentController.updateStudent);

router.delete("/:id", studentController.deleteStudent);

router.post("/create", upload.single("studentImage"), studentController.createStudent);

module.exports = router;
