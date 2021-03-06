import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import App from "./App";
import rootReducer from "./redux/rootReducer";
import thunk from "redux-thunk";
import PersonalData from "./components/personalData"
// every reducer correspond to a state
let myStore = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={myStore}>
    <App />
    {/* <PersonalData/> */}
  </Provider>,
  document.getElementById("root")
);
