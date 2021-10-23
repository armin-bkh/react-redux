import { connect } from "react-redux";
import { buyCake } from "./Redux/cake/cakeActions";

const CakeContainer = (props) => {
  return (
    <div>
      <h1>Number of cakes - {props.numOfCake}</h1>
      <button type="button" onClick={props.buyCake}>
        Buy cake
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { numOfCake: state.numOfCake };
};

const mapDispatchToProps = (dispatch) => {
  return { buyCake: () => dispatch(buyCake()) };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);