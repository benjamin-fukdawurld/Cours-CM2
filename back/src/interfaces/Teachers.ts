export interface Teacher {
  id: string;
  firstName: string;
  lastName: string;
  birthDate: Date;
  schoolClassIds?: string[];
}

export interface TeacherSearchOptions {
  id?: string;
  firstName?: string;
  lastName?: string;
  schoolClassIds?: string[];
}
