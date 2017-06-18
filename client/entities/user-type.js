const TEACHER_STRING = 'TEACHER';
const STUDENT_STRING = 'STUDENT';

class UserType {
  constructor(type) {
    this._type = type;
  }

  isTeacher() {
    return this._type === TEACHER_STRING;
  }

  isStudent() {
    return this._student === STUDENT_STRING;
  }
};

const TEACHER = new UserType(TEACHER_STRING);
const STUDENT = new UserType(STUDENT_STRING);

export { TEACHER, STUDENT };
