import Mentor from "../Models/MentorSchema.js";

export const createMentor = async (req, res) => {
  try {
    const mentor = await Mentor.create(req.body);
      res.status(201).json({message:"MENTOR CREATED SUCESSFULLY",mentor});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
