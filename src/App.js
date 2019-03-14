import React, { Component } from "react";
import NavBar from "./components/NavBar";
import MainList from "./components/MainList";
import { AppBar, Toolbar, Grid } from "@material-ui/core";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <MainList />
      </div>
    );
  }
}

export default App;
