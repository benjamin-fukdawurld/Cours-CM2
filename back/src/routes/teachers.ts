import { Router } from 'express';

import controller from '../controllers/teacher';

const router = Router();

router.get('/', controller.getTeachers.bind(controller));
router.get('/:id', controller.getTeacher.bind(controller));
router.post('/', controller.addTeacher.bind(controller));
router.patch('/:id', controller.updateTeacher.bind(controller));
router.delete('/:id', controller.deleteTeacher.bind(controller));

export default router;
