import express from "express";
import { createMentor } from "../Controllers/MentorController.js";
import { assignStudentToMentor, createStudent, getPreviousMentor, getStudentsByMentor } from "../Controllers/StudentController.js";


const router = express.Router();

router.post("/create/mentor", createMentor);


router.post("/create/student", createStudent);
router.put('/assign/:mentorId/:studentId', assignStudentToMentor);
router.get('/:mentorId', getStudentsByMentor);
router.get('/:studentId/mentor', getPreviousMentor);

export default router;


