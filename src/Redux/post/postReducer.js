import {
  FETCH_POST_FAILURE,
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
} from "./postTypes";

const initialState = { post: null, loading: false, error: null };

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POST_REQUEST: {
      return { ...state, loading: true, error: null, post: null };
    }
    case FETCH_POST_SUCCESS: {
      return { ...state, loading: false, error: null, post: action.payload };
    }
    case FETCH_POST_FAILURE: {
      return { ...state, error: action.payload, post: null, loading: false };
    }
    default:
      return state;
  }
};

export default postReducer;
