const initialState = {
  selectedUser: {
    id: '1',
    email: 'polito@gmail.com',
    firstName: 'Polina',
    lastName: 'Krasteva'
    // TODO: Add all
  }
}

const userContext = (state = initialState, action) => {
  return state;
};

export { userContext };
