import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import * as firebase from "firebase";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";

var config = {};
firebase.initializeApp(config);

// get boxsPositions from localStorage
let boxsPositionsData = JSON.parse(localStorage.getItem("boxsPositions"));

if (!boxsPositionsData) {
  boxsPositionsData = [
    { id: "greenBox", parentId: "sideBar" },
    { id: "pinkBox", parentId: "sideBar" },
    { id: "blueBox", parentId: "sideBar" },
    { id: "orangeBox", parentId: "sideBar" }
  ];
  localStorage.setItem("boxsPositions", JSON.stringify(boxsPositionsData));
}

// update localStorage
let updateData = actionPayload => {
  let boxsPositions = JSON.parse(localStorage.getItem("boxsPositions"));
  boxsPositions = boxsPositions.map(item => {
    if (item.id === actionPayload.id) {
      item.parentId = actionPayload.parentId;
    }
    return item;
  });
  localStorage.setItem("boxsPositions", JSON.stringify(boxsPositions));
  return boxsPositions;
};

const boxesReducer = (state = boxsPositionsData, action) => {
  switch (action.type) {
    case "BOX_MOVED":
      state = updateData(action.payload);
      break;
    default:
      break;
  }
  return state;
};

const pathReducer = (state = "home", action) => {
  switch (action.type) {
    case "PATH_CHANGED":
      console.log(document.getElementById("greenBox"));
      state = action.path;
      break;
    default:
      break;
  }
  return state;
};
const store = createStore(
  combineReducers({ boxsPositionsData: boxesReducer, path: pathReducer })
);
store.subscribe(() => {
  console.log("Store update!", store.getState());
});
// store.dispatch({
//   type: "BOX_MOVED",
//   payload: {
//     id: "blueBox",
//     parentId: "SidesA"
//   }
// });
// store.dispatch({
//   type: "PATH_CHANGED",
//   path: "home"
// });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
