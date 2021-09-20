import StudentModel from '../models/Student';
import { Student, StudentSearchOptions } from '../interfaces/Students';

async function getStudents(options?: StudentSearchOptions): Promise<Student[]> {
  const filters: any[] = [];
  if (options?.id) {
    filters.push({ _id: options.id });
  }

  if (options?.firstName) {
    filters.push({ firstName: options.firstName });
  }

  if (options?.lastName) {
    filters.push({ lastName: options.lastName });
  }

  return StudentModel.find(
    filters.length
      ? {
          $or: filters,
        }
      : {},
  );
}

async function getStudent(id: string): Promise<Student | null> {
  return StudentModel.findOne({ _id: id });
}

async function addStudent(data: Student): Promise<void> {
  const { firstName, lastName, birthDate, currentClassId } = data;
  const student = new StudentModel({ firstName, lastName, birthDate, currentClassId });
  await student.save();
}

async function updateStudent(data: Student): Promise<void> {
  if (!data.id) {
    throw new Error('Cannot update Student: Missing id');
  }

  const student = await StudentModel.findOne({ _id: data.id });
  if (!student) {
    throw new Error('Cannot update Student: Cannot find user');
  }

  await StudentModel.updateOne({ _id: data.id }, { _id: data.id, ...data });
}

async function deleteStudent(id: string): Promise<void> {
  await StudentModel.deleteOne({ _id: id });
}

export default { getStudents, getStudent, addStudent, updateStudent, deleteStudent };
