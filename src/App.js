import { Provider } from "react-redux";
import CakeContainer from "./Components/CakeContainer";
import CakePayloadContainer from "./Components/CakePayloadContainer";
import IceCreamContainer from "./Components/iceCreamContainer";
import ItemConatiner from "./Components/ItemConatiner";
import store from "./Components/Redux/store";

function App() {
  return (
    <div>
      <Provider store={store}>
        <ItemConatiner cake number="cake" />
        <ItemConatiner number="icecream" />
        <CakeContainer />
        <IceCreamContainer />
        <CakePayloadContainer />
      </Provider>
    </div>
  );
}

export default App;
