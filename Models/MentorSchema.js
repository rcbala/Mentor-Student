import mongoose from "mongoose";

const mentorSchema = new mongoose.Schema({
  name: String,
});

const Mentor = mongoose.model("Mentor", mentorSchema);

export default Mentor;
