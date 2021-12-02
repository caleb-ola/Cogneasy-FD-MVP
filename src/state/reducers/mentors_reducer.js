const MentorReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_ALL_MENTORS":
      return action.payload;
    default:
      return state;
  }
};

export default MentorReducer;
