import {
  FETCH_DOG_SUCCESS,
  SET_DOG_LOADING_SCREEN,
  FETCH_DOG_FAIL
} from "../actions/dog";

const initialState = {
  dog: {},
  loading: false,
  errorMessage: ""
};

export function dogReducer(state = initialState, action) {
  if (action.type === SET_DOG_LOADING_SCREEN) {
    return { ...state, loading: true };
  }
  if (action.type === FETCH_DOG_SUCCESS) {
    return { ...state, loading: false, dog: action.response };
  }
  if (action.type === FETCH_DOG_FAIL) {
    return { ...state, loading: false, errorMessage: action.error };
  }

  return state;
}
