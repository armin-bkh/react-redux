import { Provider } from "react-redux";
import CakeContainer from "./Components/CakeContainer";
import store from "./Components/Redux/store";

function App() {
  return (
    <div>
      <Provider store={store}>
        <CakeContainer />
      </Provider>
    </div>
  );
}

export default App;
