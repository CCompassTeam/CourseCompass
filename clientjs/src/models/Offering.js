import mongoose from "mongoose";

const OfferingSchema = new mongoose.Schema({
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Course',
      required: true,
    },
    instructor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Instructor',
      required: true,
    },
    sections: [String],
    schedule: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Schedule'
    }],
});

export default  mongoose.model("Offering", OfferingSchema);

