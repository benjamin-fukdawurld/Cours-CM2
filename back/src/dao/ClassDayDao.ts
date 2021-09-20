import ClassDayModel, { RegisterRowModel } from '../models/ClassDay';
import { ClassDay, ClassDaySearchOptions } from '../interfaces/ClassDays';

async function getClassDays(options?: ClassDaySearchOptions): Promise<ClassDay[]> {
  const filters: any[] = [];
  if (options?.id) {
    filters.push({ _id: options.id });
  }

  if (options?.date) {
    filters.push({ date: options.date });
  }

  if (options?.schoolClassId) {
    filters.push({ schoolClassId: options.schoolClassId });
  }

  return ClassDayModel.find(
    filters.length
      ? {
          $or: filters,
        }
      : {},
  );
}

async function getClassDay(id: string): Promise<ClassDay | null> {
  return ClassDayModel.findOne({ _id: id });
}

async function addClassDay(data: ClassDay): Promise<void> {
  const { date, schoolClassId, description } = data;
  const classDay = new ClassDayModel({ date, schoolClassId, description });
  await classDay.save();
}

async function updateClassDay(data: ClassDay): Promise<void> {
  if (!data.id) {
    throw new Error('Cannot update ClassDay: Missing id');
  }

  const classDay = await ClassDayModel.findOne({ _id: data.id });
  if (!classDay) {
    throw new Error('Cannot update ClassDay: Cannot find user');
  }

  await ClassDayModel.updateOne({ _id: data.id }, { _id: data.id, ...data });
}

async function deleteClassDay(id: string): Promise<void> {
  await ClassDayModel.deleteOne({ _id: id });
}

export default { getClassDays, getClassDay, addClassDay, updateClassDay, deleteClassDay };
