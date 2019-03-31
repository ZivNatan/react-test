import React, { Component } from "react";
import NavBar from "./components/sherd/NavBar";
import Edit from "./components/pages/Edit";
import Home from "./components/pages/Home";
import Error from "./components/pages/Error";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SideBar from "./components/sherd/SideBar";
import "./App.css";
import { connect } from "react-redux";

class App extends Component {
  componentDidMount = () => {
    let localStorgeData = JSON.parse(localStorage.getItem("boxsPositions"));
    if (localStorgeData) {
      this.updateHtml(localStorgeData);
    }
  };
  drag = ev => {
    if (ev.target.id) {
      ev.dataTransfer.setData("text", ev.target.id);
    }
  };
  updateHtml = localStorgeData => {
    localStorgeData.map(item => {
      let box = document.getElementById(item.id);
      document.getElementById(item.parentId).appendChild(box);
      return item;
    });
  };
  render() {
    return (
      <div>
        <div
          id="boxes-container"
          style={{
            position: "fixed",
            top: "10px",
            opacity: "0.7",
            backgroundColor: "red",
            width: "100%",
            // display: "flex",
            display: "none",
            height: "100px"
          }}
        >
          <div
            id="clone-greenBox"
            className="box green-box"
            draggable="true"
            onDragStart={e => {
              console.log("onDragSrart: ", e);
              this.drag(e, "blueBox");
            }}
          />
          <div
            id="clone-pinkBox"
            className="box pink-box"
            draggable="true"
            onDragStart={e => {
              this.drag(e, "pinkBox");
            }}
          />
          <div
            id="clone-blueBox"
            className="box blue-box"
            draggable="true"
            onDragStart={e => {
              this.drag(e, "blueBox");
            }}
          />
          <div
            id="clone-orangeBox"
            className="box orange-box"
            draggable="true"
            onDragStart={e => {
              this.drag(e, "orangeBox");
            }}
          />
        </div>
        <BrowserRouter>
          <div>
            <NavBar props={this.props} />
            <div className="main">
              <SideBar />
              <Switch>
                <Route path="/" render={props => <Home {...props} />} exact />
                <Route
                  path="/edit/:gridId"
                  render={props => <Edit {...props} />}
                />
                <Route component={Error} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    boxsPositionsData: state.boxsPositionsData,
    path: state.path
  };
};
const mapDispatchToProps = dispatch => {
  return {
    boxMoved: box => {
      dispatch({
        type: "BOX_MOVED",
        payload: {
          id: box.id,
          parentId: box.parentId
        }
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
