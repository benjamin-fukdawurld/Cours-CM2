import { Router } from 'express';

import controller from '../controllers/schoolClass';

const router = Router();

router.get('/', controller.getSchoolClasses.bind(controller));
router.get('/:id', controller.getSchoolClass.bind(controller));
router.post('/:id/add', controller.addStudentToClass.bind(controller));
router.post('/:id/remove', controller.removeStudentFromClass.bind(controller));
router.post('/', controller.addSchoolClass.bind(controller));
router.patch('/:id', controller.updateSchoolClass.bind(controller));
router.delete('/:id', controller.deleteSchoolClass.bind(controller));

export default router;
