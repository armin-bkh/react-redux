import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
// import { connect } from "react-redux";
import { buyCake } from "./Redux/cake/cakeActions";

const CakeContainer = (props) => {
    const numOfCake = useSelector(state => state.cakes.numOfCake)
    const dispatch = useDispatch();
  return (
    <div>
      <h1>Number of cakes - {numOfCake}</h1>
      <button type="button" onClick={() => dispatch(buyCake())}>
        Buy cake
      </button>
    </div>
  );
};

export default CakeContainer;

// const mapStateToProps = (state) => {
//   return { numOfCake: state.numOfCake };
// };

// const mapDispatchToProps = (dispatch) => {
//   return { buyCake: () => dispatch(buyCake()) };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);