export enum StudentStatus {
  Present = 0,
  MissingMorning = 1,
  MissingAfternoon = 2,
  MissingDay = 3,
}

export interface RegisterRow {
  id: string;
  studentId: string;
  status: StudentStatus;
  description: string;
}

export interface ClassDay {
  id: string;
  date: Date;
  schoolClassId: string;
  register: string[];
  description: string;
}

export interface ClassDaySearchOptions {
  id?: string;
  date?: Date;
  schoolClassId?: string;
}
