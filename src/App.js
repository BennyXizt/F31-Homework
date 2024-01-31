import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import "./css/App.css";
import List from "./components/List/List";
import store from "./slices/store";

function App() {

  return (
    <Provider store={store}>
      <List />
    </Provider>
  );
}

export default App;
