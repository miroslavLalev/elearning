const initialState = {
  selectedCourse: {
    id: '5',
    name: 'My Course',
    requirements: ['r1', 'r2', 'r3'],
    description: 'Course description',
    topics: ['First topic', 'Second topic'],
    lectures: [
      {
        id:'1',
        name: 'Lecture 1',
        about: 'Info about lecture'
      },
      {
        id:'2',
        name: 'Lecture 2',
        about: 'Info about lecture'
      }
    ]
  }
};

const courseContext = (state = initialState, action) => {
  return state;
};

export { courseContext };
