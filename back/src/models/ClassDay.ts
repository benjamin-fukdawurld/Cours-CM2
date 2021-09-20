import { model, Schema, Document } from 'mongoose';
import SchoolClassDao from '../dao/SchoolClassDao';
import StudentDao from '../dao/StudentDao';
import { StudentStatus, RegisterRow, ClassDay } from '../interfaces/ClassDays';
import { SchoolClass } from '../interfaces/SchoolClasses';
import { Student } from '../interfaces/Students';

const RegisterRowSchema = new Schema<RegisterRow>({
  studentId: { type: Schema.Types.ObjectId, ref: 'Student' },
  status: {
    type: Number,
    enum: [
      StudentStatus.Present,
      StudentStatus.MissingMorning,
      StudentStatus.MissingAfternoon,
      StudentStatus.MissingDay,
    ],
  },
  description: String,
});

RegisterRowSchema.virtual('id').get(function (this: { _id: string }) {
  return this._id;
});

RegisterRowSchema.set('toObject', { virtuals: true });
RegisterRowSchema.set('toJSON', { virtuals: true });

RegisterRowSchema.methods.getStudent = async function (this: RegisterRow): Promise<Student | null> {
  return StudentDao.getStudent(this.studentId);
};

const ClassDaySchema = new Schema<ClassDay>({
  date: { type: Date, required: true },
  schoolClassId: { type: Schema.Types.ObjectId, ref: 'SchoolClass' },
  register: [{ type: Schema.Types.ObjectId, ref: 'RegisterRow' }],
});

ClassDaySchema.virtual('id').get(function (this: { _id: string }) {
  return this._id;
});

ClassDaySchema.set('toObject', { virtuals: true });
ClassDaySchema.set('toJSON', { virtuals: true });

ClassDaySchema.methods.getSchoolClass = async function (this: ClassDay): Promise<SchoolClass> {
  return SchoolClassDao.getSchoolClass(this.schoolClassId);
};

ClassDaySchema.methods.getRegisterRows = async function (this: ClassDay): Promise<RegisterRow[]> {
  return RegisterRowModel.find({ _id: this.register });
};

const RegisterRowModel = model<RegisterRow>('RegisterRow', RegisterRowSchema);
export { RegisterRowModel };
export default model<ClassDay>('ClassDay', ClassDaySchema);
