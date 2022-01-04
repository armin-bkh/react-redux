import {
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  POST_POSTS_FAILURE,
  POST_POSTS_REQUEST,
  POST_POSTS_SUCCESS,
} from "./postTypes";

const initialState = { posts: [], loading: false, error: null };

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST: {
      return { ...state, loading: true, error: null, posts: [] };
    }
    case FETCH_POSTS_SUCCESS: {
      return { ...state, loading: false, error: null, posts: action.payload };
    }
    case FETCH_POSTS_FAILURE: {
      return { ...state, error: action.payload, posts: [], loading: false };
    }
    case POST_POSTS_SUCCESS: {
      const clonePosts = [...state.posts];
      clonePosts.push(action.payload);
      return { ...state, error: null, posts: clonePosts };
    }
    case POST_POSTS_FAILURE: {
      return { ...state, error: action.payload };
    }
    default:
      return state;
  }
};

export default postReducer;
