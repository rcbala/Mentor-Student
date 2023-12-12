import Mentor from "../Models/MentorSchema.js";
import Student from "../Models/StudentSchema.js";

export const createStudent = async (req, res) => {
  try {
    const student = await Student.create(req.body);
      res.status(201).json({ message: "STUDENT CREATED SUCESSFULLY", student });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const assignStudentToMentor = async (req, res) => {
  try {
    const mentor = await Mentor.findById(req.params.mentorId);
    const student = await Student.findByIdAndUpdate(
      req.params.studentId,
        { mentor: mentor._id, },
    
      { new: true }
    );
      res.status(200).json({ message:"Assign Sucessfully",student });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export const getStudentsByMentor = async (req, res) => {
  try {
    const students = await Student.find({ mentor: req.params.mentorId });
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getPreviousMentor = async (req, res) => {
  try {
    const student = await Student.findById(req.params.studentId).populate(
      "mentor"
    );
    res.json(student.mentor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
