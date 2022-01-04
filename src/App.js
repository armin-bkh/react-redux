import { Provider } from "react-redux";
import CakeContainer from "./Components/CakeContainer";
import CakePayloadContainer from "./Components/CakePayloadContainer";
import IceCreamContainer from "./Components/iceCreamContainer";
import ItemConatiner from "./Components/ItemConatiner";
import store from "./Redux/store";
import UsersContainer from "./Components/UsersContainer";
import PostSaga from "./Components/PostSaga";

function App() {
  return (
    <div>
      <Provider store={store}>
        {/* <ItemConatiner cake number="cake" />
        <ItemConatiner number="icecream" />
        <CakeContainer />
        <IceCreamContainer />
        <CakePayloadContainer /> */}
        {/* <UsersContainer /> */}
        <PostSaga />
      </Provider>
    </div>
  );
}

export default App;
