const initialState = [
  {
    id: '1',
    name: 'Introduction to Probability and Data',
    description: 'This course introduces you to sampling and exploring data, as well as basic probability theory and Bayes rule. You will examine various types of sampling methods, and discuss how such methods can impact the scope of inference. '
  },
  {
    id: '2',
    name: 'Creative Problem Solving',
    description: 'This course deals directly with your ability for creativity which is a critical skill in any field. It focuses on divergent thinking, the ability to develop multiple ideas and concepts to solve problems. Through a series of creativity building exercises, short lectures, and readings, learners develop both an understanding of creativity and increase their own ability.'
  },
  {
    id: '3',
    name: 'Chinese for Beginners',
    description: 'Nowadays, there is an increasing number of people who are interested in Chinese culture and language. And it is useful to know about the language when coming to China for travel or business. This is an ABC Chinese course for beginners, including introduction of phonetics and daily expressions.'
  }
];

const coursesContext = (state = initialState, action) => {
  return state;
};

export { coursesContext };
