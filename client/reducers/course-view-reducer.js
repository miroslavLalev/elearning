const initialState = {
  selectedCourse: {
    id: '1',
    name: 'Introduction to Probability and Data',
    requirements: ['Basic Maths'],
    description: 'This course introduces you to sampling and exploring data, as well as basic probability theory and Bayes rule. You will examine various types of sampling methods, and discuss how such methods can impact the scope of inference. ',
    topics: ['Installing and Using R and RStudio', 'Use this software for lab exercies and a final project'],
    lectures:[
      {
        id:'1',
        name:'Installing R',
        about:'You will learn how to install and configure R'}
      ,{
        id:'2',
        name:'R basic syntax',
        about:'We will cover R basic syntax'
      }
    ]
  }
};

const courseContext = (state = initialState, action) => {
  return state;
};

export { courseContext };
