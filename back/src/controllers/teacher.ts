import { Request, Response } from 'express';

import { Teacher } from '../interfaces/Teachers';
import TeacherService from '../services/TeacherService';

class TeacherController {
  public async getTeachers(req: Request, res: Response) {
    try {
      const teachers = await TeacherService.getTeachers(req.query);
      res.status(200).send(teachers);
    } catch (error: any) {
      res.status(500).send(error);
    }
  }

  public async getTeacher(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const teacher = await TeacherService.getTeacher(id);
      res.status(200).send(teacher);
    } catch (error: any) {
      res.status(500).send(error);
    }
  }

  public async addTeacher(req: Request, res: Response) {
    try {
      await TeacherService.addTeacher(req.body as Teacher);
      res.status(201).send({ message: 'Teacher created' });
    } catch (error: any) {
      res.status(500).send(error);
    }
  }

  public async updateTeacher(req: Request, res: Response) {
    if (!req.params.id) {
      res.status(400).send({ message: 'Missing information' });
      return;
    }

    const teacherData = { ...req.body };

    try {
      const teacher = await TeacherService.getTeacher(req.params.id);
      if (!teacher) {
        res.status(404).send({ message: 'Cannot find teacher' });
        return;
      }

      await TeacherService.updateTeacher({ id: req.params.id, ...teacherData });

      res.status(200).send({ message: 'User updated' });
    } catch (error: any) {
      res.status(500).send(error);
    }
  }

  public async deleteTeacher(req: Request, res: Response) {
    if (!req.params.id) {
      res.status(400).send({ message: 'Missing information' });
      return;
    }

    try {
      await TeacherService.deleteTeacher(req.params.id);
      res.status(200).send({ message: 'Teacher deleted' });
    } catch (error: any) {
      res.status(500).send(error);
    }
  }
}

const controller = new TeacherController();

export default controller;
