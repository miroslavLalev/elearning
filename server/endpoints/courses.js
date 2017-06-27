import express from 'express';

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

export { router, COURSES_PATH };
