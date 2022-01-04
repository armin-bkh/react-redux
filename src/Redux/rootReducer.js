import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import postReducer from "./post/postReducer";
import usersReducer from "./users/usersReducer";

const rootReducer = combineReducers({
  cakes: cakeReducer,
  iceCreams: iceCreamReducer,
  users: usersReducer,
  post: postReducer,
});

export default rootReducer;
