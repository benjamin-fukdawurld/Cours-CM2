import { Router } from 'express';

import controller from '../controllers/student';

const router = Router();

router.get('/', controller.getStudents.bind(controller));
router.get('/:id', controller.getStudent.bind(controller));
router.post('/', controller.addStudent.bind(controller));
router.patch('/:id', controller.updateStudent.bind(controller));
router.delete('/:id', controller.deleteStudent.bind(controller));

export default router;
