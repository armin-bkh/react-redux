import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { connect } from "react-redux";
import { buyCake } from "../Redux/cake/cakeActions";

const CakePayloadContainer = (props) => {
  const [number, setNumber] = useState(1);
  const numOfCake = useSelector(({ cakes }) => cakes.numOfCake);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Number of the cake - {numOfCake}</h1>
      <input
        type="text"
        value={number}
        onChange={({ target }) => setNumber(target.value)}
      />
      <button type="button" onClick={() => dispatch(buyCake(number || 1))}>
        buy {number} cake
      </button>
    </div>
  );
};

export default CakePayloadContainer;

// const mapStateToProps = (state) =>{
//     return {
//         numOfCake: state.cakes.numOfCake
//     }
// }

// const mapDispatchToProps = (dispatch) =>{
//     return {
//         buyCake: number => dispatch(buyCake(number))
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(CakePayloadContainer);
