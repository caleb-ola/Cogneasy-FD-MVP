import axios from "axios";

export const Mentors = () => {
  return (dispatch) => {
    axios.get("https://cogneasy-mvp.herokuapp.com/api/v1/mentors").then(
      (response) => {
        // console.log(response);
        dispatch({
          type: "GET_ALL_MENTORS",
          payload: response,
        });
      },
      (error) => {
        // console.log(error);
      }
    );
  };
};

export const Courses = () => {
  return (dispatch) => {
    axios.get("https://cogneasy-mvp.herokuapp.com/api/v1/courses").then(
      (response) => {
        // console.log(response);
        dispatch({
          type: "GET_ALL_COURSES",
          payload: response,
        });
      },
      (error) => {
        // console.log(error);
      }
    );
  };
};

export const Testimonial = () => {
  return (dispatch) => {
    axios.get("https://cogneasy-mvp.herokuapp.com/api/v1/testimonials").then(
      (response) => {
        // console.log(response);
        dispatch({
          type: "GET_ALL_TESTIMONIALS",
          payload: response,
        });
      },
      (error) => {
        // console.log(error);
      }
    );
  };
};
