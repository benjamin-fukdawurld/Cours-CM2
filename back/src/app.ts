import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import path from 'path';

import { AppProps, AppRoute } from './interfaces/App';

import { StudentSearchOptions } from './interfaces/Students';
import { SchoolClassSearchOptions } from './interfaces/SchoolClasses';

import StudentService from './services/StudentService';
import SchoolClassService from './services/SchoolClassService';
import TeacherService from './services/TeacherService';

import graphQl from './middlewares/graphql';

const rootValue = {
  students: (options?: StudentSearchOptions) => {
    return StudentService.getStudents(options);
  },
  schoolClasses: (options?: SchoolClassSearchOptions) =>
    SchoolClassService.getSchoolClasses(options),
  teacher: TeacherService.getTeachers,
  classes: () => [],
};

export function createApp({ routes }: AppProps): express.Express {
  const app = express();
  app.use(cors());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(helmet());
  app.use('/graphql', graphQl(rootValue));
  app.use('/images', express.static(path.join(path.dirname(''), 'images')));

  if (routes) {
    routes.forEach((route: AppRoute) => {
      app.use(route.path, route.router);
    });
  }

  return app;
}
