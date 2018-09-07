import { API_BASEURL } from "../config";

export const SET_CAT_LOADING_SCREEN = "SET_CAT_LOADING_SCREEN";
export const setCatLoadingScreen = () => ({
  type: SET_CAT_LOADING_SCREEN
});

export const FETCH_CAT_SUCCESS = "FETCH_CAT_SUCCESS";
export const fetchCatSuccess = response => ({
  type: FETCH_CAT_SUCCESS,
  response
});

export const FETCH_CAT_FAIL = "FETCH_CAT_FAIL";
export const fetchCatFail = error => ({
  type: FETCH_CAT_FAIL,
  error
});

export const fetchCat = () => dispatch => {
  dispatch(setCatLoadingScreen());
  fetch(`${API_BASEURL}/api/cat`, {
    method: "GET"
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res);
      }
      return res.json();
    })
    .then(parsedResponse => dispatch(fetchCatSuccess(parsedResponse)))
    .catch(err => dispatch(fetchCatFail(err)));
};
////////////////////////////////////////////////////////////////////////////////
//Delete Requests

// export const DELETE_CAT_SUCCESS = "DELETE_CAT_SUCCESS";
// export const deleteCatSuccess = response => ({
//   type: DELETE_CAT_SUCCESS,
//   response
// });

// export const DELETE_CAT_FAIL = "DELETE_CAT_FAIL";
// export const deleteCatFail = error => ({
//   type: DELETE_CAT_FAIL,
//   error
// });

export const deleteCat = () => dispatch => {
  dispatch(setCatLoadingScreen());
  fetch(`${API_BASEURL}/api/cat`, {
    method: "DELETE"
  })
    .then(res => {
      if (res.status !== 204) {
        console.log(res.status);
        return Promise.reject(res);
      }
      return res;
    })
    .then(parsedResponse => {
      // dispatch(deleteCatSuccess(parsedResponse));
      dispatch(fetchCat());
    })
    .catch(err => {
      console.log(err);
      dispatch(fetchCatFail(err));
    });
};
