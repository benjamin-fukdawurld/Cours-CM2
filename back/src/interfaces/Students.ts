export interface Student {
  id: string;
  firstName: string;
  lastName: string;
  birthDate: Date;
  currentClassId: string | null;
}

export interface StudentSearchOptions {
  id?: string;
  firstName?: string;
  lastName?: string;
  currentClassId?: string | null;
}
