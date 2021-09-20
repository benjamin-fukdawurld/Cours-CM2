import { model, Schema, Document } from 'mongoose';
import { SchoolClass } from '../interfaces/SchoolClasses';
import { Student } from '../interfaces/Students';
import StudentModel from './Student';

const SchoolClassSchema = new Schema<SchoolClass>({
  name: { type: String, required: true, minLength: 1 },
  grade: { type: String, required: true, minLength: 1 },
  year: { type: String, required: true, minLength: 1 },
  studentIds: [{ type: Schema.Types.ObjectId, ref: 'Students' }],
});

SchoolClassSchema.virtual('id').get(function (this: { _id: string }) {
  return this._id;
});

SchoolClassSchema.set('toObject', { virtuals: true });
SchoolClassSchema.set('toJSON', { virtuals: true });

SchoolClassSchema.methods.getStudents = async function (this: SchoolClass): Promise<Student[]> {
  return StudentModel.find({ _id: this.studentIds });
};

SchoolClassSchema.methods.addStudent = async function (
  this: SchoolClass & Document<SchoolClass, any, any>,
  studentId: string,
): Promise<SchoolClass & Document<SchoolClass, any, any>> {
  if (this.studentIds.findIndex((current: string): boolean => current === studentId) >= 0) {
    throw new Error('student is already in class');
  }

  this.studentIds.push(studentId);
  return this.save();
};

SchoolClassSchema.methods.removeStudent = async function (
  this: SchoolClass & Document<SchoolClass, any, any>,
  studentId: string,
): Promise<SchoolClass & Document<SchoolClass, any, any>> {
  const studentIds = this.studentIds.filter((current: string) => current !== studentId);
  if (this.studentIds.length === studentIds.length) {
    throw new Error('student is not in class');
  }

  this.studentIds = studentIds;
  return this.save();
};

export default model<SchoolClass>('SchoolClass', SchoolClassSchema);
