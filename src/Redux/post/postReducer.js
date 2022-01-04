import {
  FETCH_POST_FAILURE,
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
  POST_POST_FAILURE,
  POST_POST_REQUEST,
  POST_POST_SUCCESS,
} from "./postTypes";

const initialState = { posts: [], loading: false, error: null };

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POST_REQUEST: {
      return { ...state, loading: true, error: null, post: {} };
    }
    case FETCH_POST_SUCCESS: {
      return { ...state, loading: false, error: null, post: action.payload };
    }
    case FETCH_POST_FAILURE: {
      return { ...state, error: action.payload, post: {}, loading: false };
    }
    case POST_POST_SUCCESS: {
      const clonePosts = [...state.posts];
      clonePosts.push(action.payload);
      return { ...state, error: null, post: clonePosts };
    }
    case POST_POST_FAILURE: {
      return { ...state, error: action.payload };
    }
    default:
      return state;
  }
};

export default postReducer;
