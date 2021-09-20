import { Teacher, TeacherSearchOptions } from '../interfaces/Teachers';
import TeacherDao from '../dao/TeacherDao';

async function getTeachers(options?: TeacherSearchOptions): Promise<Teacher[]> {
  return TeacherDao.getTeachers(options);
}

async function getTeacher(id: string): Promise<Teacher> {
  return TeacherDao.getTeacher(id);
}

async function addTeacher(data: Teacher): Promise<void> {
  await TeacherDao.addTeacher(data);
}

async function updateTeacher(data: Teacher): Promise<void> {
  await TeacherDao.updateTeacher(data);
}

async function deleteTeacher(id: string): Promise<void> {
  await TeacherDao.deleteTeacher(id);
}

export default { getTeachers, getTeacher, addTeacher, updateTeacher, deleteTeacher };
