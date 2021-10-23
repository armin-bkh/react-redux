import { Provider } from "react-redux";
import CakeContainer from "./Components/CakeContainer";
import IceCreamContainer from "./Components/iceCreamContainer";
import store from "./Components/Redux/store";

function App() {
  return (
    <div>
      <Provider store={store}>
        <CakeContainer />
        <IceCreamContainer />
      </Provider>
    </div>
  );
}

export default App;
