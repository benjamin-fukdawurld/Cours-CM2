import SchoolClassModel from '../models/SchoolClass';
import { SchoolClass, SchoolClassSearchOptions } from '../interfaces/SchoolClasses';
import { Student } from '../interfaces/Students';

function toSchoolClass({ _id, name, grade, year, studentIds, classDayIds }: any): SchoolClass {
  return { id: _id, name, grade, year, studentIds, classDayIds };
}

async function getSchoolClasses(options?: SchoolClassSearchOptions): Promise<SchoolClass[]> {
  const filters: any[] = [];
  if (options?.id) {
    filters.push({ _id: options.id });
  }

  if (options?.name) {
    filters.push({ name: options.name });
  }

  if (options?.grade) {
    filters.push({ grade: options.grade });
  }

  if (options?.year) {
    filters.push({ year: options.year });
  }

  const schoolClasses = (
    await SchoolClassModel.find(
      filters.length
        ? {
            $or: filters,
          }
        : {},
    )
  ).map((schoolClass: any): SchoolClass => {
    return toSchoolClass(schoolClass);
  });

  return schoolClasses;
}

async function getSchoolClass(id: string) {
  return toSchoolClass(await SchoolClassModel.findOne({ _id: id }));
}

async function addSchoolClass(data: SchoolClass): Promise<void> {
  const { name, grade, year, studentIds } = data;
  const schoolClass = new SchoolClassModel({ name, grade, year, studentIds });
  await schoolClass.save();
}

async function updateSchoolClass(data: SchoolClass): Promise<void> {
  if (!data.id) {
    throw new Error('Cannot update SchoolClass: Missing id');
  }

  const schoolClass = await SchoolClassModel.findOne({ _id: data.id });
  if (!schoolClass) {
    throw new Error('Cannot update SchoolClass: Cannot find class');
  }

  await SchoolClassModel.updateOne({ _id: data.id }, { _id: data.id, ...data });
}

async function deleteSchoolClass(id: string): Promise<void> {
  await SchoolClassModel.deleteOne({ _id: id });
}

async function addStudentToClass(id: string, studentId: string): Promise<void> {
  const schoolClass = await SchoolClassModel.findOne({ _id: id });
  if (!schoolClass) {
    throw new Error('Cannot add student SchoolClass: Cannot find class');
  }

  if (!schoolClass?.studentIds) {
    schoolClass.studentIds = [];
  }

  schoolClass.studentIds.push(studentId);
  await schoolClass.save();
}

async function removeStudentFromClass(id: string, studentId: string): Promise<void> {
  const schoolClass = await SchoolClassModel.findOne({ _id: id });
  if (!schoolClass) {
    throw new Error('Cannot remove student SchoolClass: Cannot find class');
  }

  if (!schoolClass?.studentIds) {
    throw new Error('Cannot remove student SchoolClass: No student in this class');
  }

  const studentIds = schoolClass.studentIds.filter((current: string) => current !== studentId);
  if (schoolClass?.studentIds.length === studentIds.length) {
    throw new Error('Cannot remove student SchoolClass: Student not in this class');
  }

  schoolClass.studentIds = studentIds;
  await schoolClass.save();
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
