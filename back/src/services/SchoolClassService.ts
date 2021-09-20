import { v4 as uuid } from 'uuid';

import { SchoolClass, SchoolClassSearchOptions } from '../interfaces/SchoolClasses';
import SchoolClassDao from '../dao/SchoolClassDao';
import StudentDao from '../dao/StudentDao';

async function getSchoolClasses(options?: SchoolClassSearchOptions): Promise<SchoolClass[]> {
  return SchoolClassDao.getSchoolClasses(options);
}

async function getSchoolClass(id: string): Promise<SchoolClass> {
  return SchoolClassDao.getSchoolClass(id);
}

async function addSchoolClass(data: SchoolClass): Promise<void> {
  await SchoolClassDao.addSchoolClass(data);
}

async function updateSchoolClass(data: SchoolClass): Promise<void> {
  await SchoolClassDao.updateSchoolClass(data);
}

async function deleteSchoolClass(id: string): Promise<void> {
  await SchoolClassDao.deleteSchoolClass(id);
}

async function addStudentToClass(id: string, studentId: string): Promise<void> {
  await SchoolClassDao.addStudentToClass(id, studentId);
}

async function removeStudentFromClass(id: string, studentId: string): Promise<void> {
  await SchoolClassDao.removeStudentFromClass(id, studentId);
}

export default {
  getSchoolClasses,
  getSchoolClass,
  addSchoolClass,
  updateSchoolClass,
  deleteSchoolClass,
  addStudentToClass,
  removeStudentFromClass,
};
