import { model, Schema } from 'mongoose';
import SchoolClassModel from './SchoolClass';
import { Teacher } from '../interfaces/Teachers';
import { SchoolClass } from '../interfaces/SchoolClasses';

const TeacherSchema = new Schema<Teacher>({
  firstName: { type: String, required: true, minLength: 2 },
  lastName: { type: String, required: true, minLength: 2 },
  birthDate: { type: Date, required: true },
  schoolClassIds: [{ type: Schema.Types.ObjectId, ref: 'SchoolClass' }],
});

TeacherSchema.virtual('id').get(function (this: { _id: string }) {
  return this._id;
});

TeacherSchema.set('toObject', { virtuals: true });
TeacherSchema.set('toJSON', { virtuals: true });

TeacherSchema.methods.getSchoolClass = async function (this: Teacher): Promise<SchoolClass[]> {
  return SchoolClassModel.find({ _id: this.schoolClassIds });
};

export default model<Teacher>('Teacher', TeacherSchema);
