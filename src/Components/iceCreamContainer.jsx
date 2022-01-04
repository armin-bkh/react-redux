import { useDispatch, useSelector } from "react-redux";
import { buyIceCream } from "../Redux/iceCream/iceCreamActions";

const IceCreamContainer = () => {
  const numofIceCream = useSelector((state) => state.iceCreams.numOfIceCream);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Number of icecreams - {numofIceCream}</h1>
      <button type="button" onClick={() => dispatch(buyIceCream())}>
        buy icecream
      </button>
    </div>
  );
};

export default IceCreamContainer;
