export interface SchoolClass {
  id: string;
  name: string;
  grade: string;
  year: string;
  studentIds: string[];
  classDayIds: string[];
}

export interface SchoolClassSearchOptions {
  id?: string;
  name?: string;
  grade?: string;
  year?: string;
  studentIds?: string[];
}
