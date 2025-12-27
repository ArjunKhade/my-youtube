import { Provider } from "react-redux";
import Body from "./components/body/Body";
import Head from "./components/header/Head";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <Head/>
      <Body/>
    </Provider>
  );
}

export default App;
