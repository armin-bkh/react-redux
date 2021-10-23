import { useEffect } from "react";
import { connect } from "react-redux";
import { FetchUsers } from "./Redux";

const UsersContainer = ({ users, fetchdata }) => {
    
    useEffect(()=>{
        fetchdata();
    }, [])
  return users.loading ? <h1>Loading...</h1> : users.error ? <h1>error accourd</h1> : users.users.map(user => <h1>{user.name}</h1>);
};

const mapStateToProps = (state) => {
  return { users: state.users };
};
const mapDispatchToProps = (dispatch) => {
  return { fetchdata: () => dispatch(FetchUsers()) };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
