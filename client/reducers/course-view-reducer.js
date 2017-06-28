const initialState = {
  selectedCourse: {
    id: '5',
    name: 'My Course',
    requirements: ['r1', 'r2', 'r3'],
    description: 'Nice course',
    topics: ['First topic', 'Second topic']
  }
};

const courseContext = (state = initialState, action) => {
  return state;
};

export { courseContext };
