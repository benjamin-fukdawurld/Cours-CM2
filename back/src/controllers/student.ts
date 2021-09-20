import { Request, Response } from 'express';

import { Student } from '../interfaces/Students';
import StudentService from '../services/StudentService';

class StudentController {
  public async getStudents(req: Request, res: Response) {
    try {
      const students = await StudentService.getStudents(req.query);
      res.status(200).send(students);
    } catch (error: any) {
      res.status(500).send(error);
    }
  }

  public async getStudent(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const student = await StudentService.getStudent(id);
      res.status(200).send(student);
    } catch (error: any) {
      res.status(500).send(error);
    }
  }

  public async addStudent(req: Request, res: Response) {
    try {
      await StudentService.addStudent(req.body as Student);
      res.status(201).send({ message: 'Student created' });
    } catch (error: any) {
      res.status(500).send(error);
    }
  }

  public async updateStudent(req: Request, res: Response) {
    if (!req.params.id) {
      res.status(400).send({ message: 'Missing information' });
      return;
    }

    const studentData = { ...req.body };

    try {
      const student = await StudentService.getStudent(req.params.id);
      if (!student) {
        console.log(studentData);
        res.status(404).send({ message: 'Cannot find student' });
        return;
      }

      console.log(studentData);
      await StudentService.updateStudent({ id: req.params.id, ...studentData });

      res.status(200).send({ message: 'User updated' });
    } catch (error: any) {
      res.status(500).send(error);
    }
  }

  public async deleteStudent(req: Request, res: Response) {
    if (!req.params.id) {
      res.status(400).send({ message: 'Missing information' });
      return;
    }

    try {
      await StudentService.deleteStudent(req.params.id);
      res.status(200).send({ message: 'Student deleted' });
    } catch (error: any) {
      res.status(500).send(error);
    }
  }
}

const controller = new StudentController();

export default controller;
