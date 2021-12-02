const TestimonialReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_ALL_TESTIMONIALS":
      return action.payload;
    default:
      return state;
  }
};

export default TestimonialReducer;
