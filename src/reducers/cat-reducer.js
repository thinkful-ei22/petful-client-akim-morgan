import {
  FETCH_CAT_SUCCESS,
  SET_CAT_LOADING_SCREEN,
  FETCH_CAT_FAIL
} from "../actions/cat";

const initialState = {
  cat: {},
  loading: false,
  errorMessage: ""
};

export function catReducer(state = initialState, action) {
  if (action.type === SET_CAT_LOADING_SCREEN) {
    return { ...state, loading: true };
  }
  if (action.type === FETCH_CAT_SUCCESS) {
    return { ...state, loading: false, cat: action.response };
  }
  if (action.type === FETCH_CAT_FAIL) {
    return { ...state, loading: false, errorMessage: action.error };
  }

  return state;
}
