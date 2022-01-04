import { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { FetchUsers } from "../Redux";

const UsersContainer = (props) => {
  const users = useSelector(({ users }) => users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchUsers());
  }, []);
  return users.loading ? (
    <h1>Loading...</h1>
  ) : users.error ? (
    <h1>{users.error.message}</h1>
  ) : (
    <div>
      <h1>user list</h1>
      {users.users.map((user) => (
        <h1 key={user.id}>{user.name}</h1>
      ))}
    </div>
  );
};

export default UsersContainer;

// const mapStateToProps = (state) => {
//   return { users: state.users };
// };
// const mapDispatchToProps = (dispatch) => {
//   return { fetchdata: () => dispatch(FetchUsers()) };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
