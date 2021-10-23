import axios from "axios";
import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from "./usersTypes";

export function fetchUsersRequest() {
  return { type: FETCH_USERS_REQUEST };
}

export function fetchUsersSuccess(users) {
  return { type: FETCH_USERS_SUCCESS, payload: users };
}

export function fetchUsersFailure(error) {
  return { type: FETCH_USERS_FAILURE, payload: error };
}

export const FetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(({ data }) => {
        dispatch(fetchUsersSuccess(data));
      })
      .catch((err) => {
        dispatch(fetchUsersFailure(err));
      });
  };
};
