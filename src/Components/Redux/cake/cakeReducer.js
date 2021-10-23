import { BUY_CAKE } from './cakeTypes';

const initialState = {
  numOfCake: 10,
};

const cakeReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case BUY_CAKE: {
      return { ...state, numOfCake: state.numOfCake - 1 };
    }
    default:
      return state;
  }
};

export default cakeReducer;