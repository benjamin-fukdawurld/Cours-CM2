import { model, Schema } from 'mongoose';
import SchoolClassDao from '../dao/SchoolClassDao';
import { Student } from '../interfaces/Students';
import { SchoolClass } from '../interfaces/SchoolClasses';

const StudentSchema = new Schema<Student>({
  firstName: { type: String, required: true, minLength: 2 },
  lastName: { type: String, required: true, minLength: 2 },
  birthDate: { type: Date, required: true },
  currentClassId: { type: Schema.Types.ObjectId, ref: 'SchoolClass' },
});

StudentSchema.virtual('id').get(function (this: { _id: string }) {
  return this._id;
});

StudentSchema.set('toObject', { virtuals: true });
StudentSchema.set('toJSON', { virtuals: true });

StudentSchema.methods.getSchoolClass = async function (this: Student): Promise<SchoolClass | null> {
  if (!this.currentClassId) {
    return null;
  }

  return SchoolClassDao.getSchoolClass(this.currentClassId);
};

export default model('Student', StudentSchema);
