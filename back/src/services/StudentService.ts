import { Student, StudentSearchOptions } from '../interfaces/Students';
import StudentDao from '../dao/StudentDao';

async function getStudents(options?: StudentSearchOptions): Promise<Student[]> {
  return StudentDao.getStudents(options);
}

async function getStudent(id: string): Promise<Student | null> {
  return StudentDao.getStudent(id);
}

async function addStudent(data: Student): Promise<void> {
  await StudentDao.addStudent(data);
}

async function updateStudent(data: Student): Promise<void> {
  await StudentDao.updateStudent(data);
}

async function deleteStudent(id: string): Promise<void> {
  await StudentDao.deleteStudent(id);
}

export default { getStudents, getStudent, addStudent, updateStudent, deleteStudent };
