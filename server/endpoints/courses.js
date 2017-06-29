import express from 'express';
import passport from 'passport';

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

router.post('/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const course = new Course(req.body);
    coursesClient.addCourse(course, req.user.id).then(() => {
      res.send('ok');
    }).catch(err => {
      res.json(err);
  });
});

router.get('/:id', (req, res) => {
  coursesClient.getCourse(req.params.id).then(course => {
    coursesClient.getLectures(req.params.id).then(lectures => {
      res.json(Object.assign(course, { lectures }));
    });
  });
});

router.post('/:id/lectures',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const lecture = new Lecture(req.body);
    coursesClient.addLecture(lecture, req.params.id).then(() => {
      res.send('ok');
    }).catch(err => {
      res.json(err);
    });
});

router.get('/:courseId/lectures/:lectureId', (req, res) => {
  coursesClient.getLecture(req.params.courseId, req.params.lectureId).then(() => {
    res.send('ok');
  }).catch(err => {
    res.json(err);
  });
});

export { router, COURSES_PATH };
