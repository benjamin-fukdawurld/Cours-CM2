import mongoose from 'mongoose';
const { Schema } = mongoose;

const coursSchema = new Schema({
  title: String,
  author: String,
  subtitles: [String],
});

const Cours = mongoose.model('Cours', coursSchema);
export default Cours;
