import { combineReducers } from "redux";
import MentorReducer from "./mentors_reducer";
import CourseReducer from "./courses_reducer";
import TestimonialReducer from "./testimonial_reducer";

const Reducers = combineReducers({
  MentorReducer,
  CourseReducer,
  TestimonialReducer,
});

export default Reducers;
