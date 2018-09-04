import axios from "axios";

export const getMovie = name => {
  console.log(name);
  return function(dispatch) {
    console.log("calling movie");
    axios({
      method: "GET",
      url: "http://localhost:8080/api/movie/get-movie",
      params: { name: name }
    })
      .then(response => {
        if (response.data.status) {
          dispatch({
            type: "GET_MOVIE",
            payload: response.data.data
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const searchMovie = name => {
  console.log(name);
  return function(dispatch) {
    console.log("searching movie");
    axios({
      method: "GET",
      url: "http://localhost:8080/api/movie/check-movie",
      params: { name: name }
    })
      .then(response => {
        if (response.data.status) {
          dispatch({
            type: "GET_MOVIE",
            payload: response.data.data
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const getAllMovies = () => {
  return function(dispatch) {
    console.log("calling");
    axios({
      method: "GET",
      url: "http://localhost:8080/api/movie/get-all-movies"
    })
      .then(response => {
        if (response.data.status) {
          dispatch({
            type: "GET_MOVIES",
            payload: response.data.data
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
};
