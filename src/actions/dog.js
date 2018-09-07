import { API_BASEURL } from "../config";

export const SET_DOG_LOADING_SCREEN = "SET_DOG_LOADING_SCREEN";
export const setDogLoadingScreen = () => ({
  type: SET_DOG_LOADING_SCREEN
});

export const FETCH_DOG_SUCCESS = "FETCH_DOG_SUCCESS";
export const fetchDogSuccess = response => ({
  type: FETCH_DOG_SUCCESS,
  response
});

export const FETCH_DOG_FAIL = "FETCH_DOG_FAIL";
export const fetchDogFail = error => ({
  type: FETCH_DOG_FAIL,
  error
});

export const fetchDog = () => dispatch => {
  dispatch(setDogLoadingScreen());
  fetch(`${API_BASEURL}api/dog`, {
    method: "GET"
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res);
      }
      return res.json();
    })
    // .then(response => response.json())
    .then(parsedResponse => dispatch(fetchDogSuccess(parsedResponse)))
    .catch(err => dispatch(fetchDogFail(err)));
};

////////////////////////////////////////////////////////////////////////////////
//Delete Requests

// export const DELETE_CAT_SUCCESS = "DELETE_CAT_SUCCESS";
// export const deleteDogSuccess = response => ({
//   type: DELETE_CAT_SUCCESS,
//   response
// });

// export const DELETE_CAT_FAIL = "DELETE_CAT_FAIL";
// export const deleteDogFail = error => ({
//   type: DELETE_CAT_FAIL,
//   error
// });

export const deleteDog = () => dispatch => {
  dispatch(setDogLoadingScreen());
  fetch(`${API_BASEURL}api/dog`, {
    method: "DELETE"
  })
    .then(res => {
      if (res.status !== 204) {
        return Promise.reject(res);
      }
      return res;
    })
    .then(parsedResponse => {
      dispatch(fetchDog());
    })
    .catch(err => dispatch(fetchDogFail(err)));
};
