import { Request, Response } from 'express';

import { SchoolClass } from '../interfaces/SchoolClasses';
import SchoolClassService from '../services/SchoolClassService';

class SchoolClassController {
  public async getSchoolClasses(req: Request, res: Response) {
    try {
      const schollClasses = await SchoolClassService.getSchoolClasses(req.query);
      res.status(200).send(schollClasses);
    } catch (error: any) {
      res.status(500).send(error);
    }
  }

  public async getSchoolClass(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const schoolClass = await SchoolClassService.getSchoolClass(id);
      res.status(200).send(schoolClass);
    } catch (error: any) {
      res.status(500).send(error);
    }
  }

  public async addSchoolClass(req: Request, res: Response) {
    try {
      const schoolClass = SchoolClassService.addSchoolClass(req.body);
      res.status(201).send({ message: 'SchoolClass created' });
    } catch (error: any) {
      res.status(500).send(error);
    }
  }

  public async updateSchoolClass(req: Request, res: Response) {
    if (!req.params.id) {
      res.status(400).send({ message: 'Missing information' });
      return;
    }

    const schoolClassData = { ...req.body };

    try {
      const schoolClass = await SchoolClassService.getSchoolClass(req.params.id);
      if (!schoolClass) {
        res.status(404).send({ message: 'Cannot find schoolClass' });
        return;
      }

      await SchoolClassService.updateSchoolClass({ id: req.params.id, ...schoolClassData });

      res.status(200).send({ message: 'User updated' });
    } catch (error: any) {
      res.status(500).send(error);
    }
  }

  public async deleteSchoolClass(req: Request, res: Response) {
    if (!req.params.id) {
      res.status(400).send({ message: 'Missing information' });
      return;
    }

    try {
      await SchoolClassService.deleteSchoolClass(req.params.id);
      res.status(200).send({ message: 'SchoolClass deleted' });
    } catch (error: any) {
      res.status(500).send(error);
    }
  }

  public async addStudentToClass(req: Request, res: Response) {
    if (!req.params.id || !req.body.studentId) {
      res.status(400).send({ message: 'Missing information' });
      return;
    }

    try {
      await SchoolClassService.addStudentToClass(req.params.id, req.body.studentId);
      res.status(200).send({ message: 'Student added to SchoolClass' });
    } catch (error: any) {
      res.status(500).send(error);
    }
  }

  public async removeStudentFromClass(req: Request, res: Response) {
    if (!req.params.id || !req.body.studentId) {
      res.status(400).send({ message: 'Missing information' });
      return;
    }

    try {
      await SchoolClassService.removeStudentFromClass(req.params.id, req.body.studentId);
      res.status(200).send({ message: 'Student removed to SchoolClass' });
    } catch (error: any) {
      res.status(500).send(error);
    }
  }
}

const controller = new SchoolClassController();

export default controller;
