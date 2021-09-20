import TeacherModel from '../models/Teacher';
import { Teacher, TeacherSearchOptions } from '../interfaces/Teachers';
import { SchoolClass } from '../interfaces/SchoolClasses';

function toTeacher({ _id, firstName, lastName, birthDate, schoolClassIds }: any): Teacher {
  return { id: _id, firstName, lastName, birthDate, schoolClassIds };
}

async function getTeachers(options?: TeacherSearchOptions): Promise<Teacher[]> {
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

  const teachers = (
    await TeacherModel.find(
      filters.length
        ? {
            $or: filters,
          }
        : {},
    )
  ).map((teacher: any): Teacher => {
    return toTeacher(teacher);
  });

  return teachers;
}

async function getTeacher(id: string) {
  return toTeacher(await TeacherModel.findOne({ _id: id }));
}

async function addTeacher(data: Teacher): Promise<void> {
  const { firstName, lastName, birthDate, schoolClassIds } = data;
  const teacher = new TeacherModel({ firstName, lastName, birthDate, schoolClassIds });
  await teacher.save();
}

async function updateTeacher(data: Teacher): Promise<void> {
  if (!data.id) {
    throw new Error('Cannot update Teacher: Missing id');
  }

  const teacher = await TeacherModel.findOne({ _id: data.id });
  if (!teacher) {
    throw new Error('Cannot update Teacher: Cannot find user');
  }

  await TeacherModel.updateOne({ _id: data.id }, { _id: data.id, ...data });
}

async function deleteTeacher(id: string): Promise<void> {
  await TeacherModel.deleteOne({ _id: id });
}

export default { getTeachers, getTeacher, addTeacher, updateTeacher, deleteTeacher };
