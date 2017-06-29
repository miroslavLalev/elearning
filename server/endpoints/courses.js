import express from 'express';

import Course from '../db/entities/course';
import Lecture from '../db/entities/lecture';
import { coursesClient } from '../db/db-client-registry';

const COURSES_PATH = '/courses';
const router = express.Router();

router.get('/', (req, res) => {
  coursesClient.getCourses().then(courses => {
    res.json(courses);
  }).catch(err => {
    res.json(err);
  });
});

router.post('/', (req, res) => {
  const course = new Course(req.body);
  coursesClient.addCourse(course).then(() => {
    res.send('ok');
  }).catch(err => {
    res.json(err);
  });
});

router.post('/:id/lectures', (req, res) => {
  const lecture = new Lecture(req.body);
  coursesClient.addLecture(lecture, req.params.id).then(() => {
    res.send('ok');
  }).catch(err => {
    res.json(err);
  });
});

export { router, COURSES_PATH };
