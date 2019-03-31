import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

class NavBar extends React.Component {
  componentDidMount = () => {
    if (window.location.pathname && window.location.pathname.length > 1) {
      this.props.changePath("edit");
    }
  };
  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit">
              <span
                style={{
                  display: this.props.path === "home" ? "block" : "none"
                }}
              >
                React & Materail-UI
              </span>
              <span
                onClick={() => {
                  this.props.changePath("home");
                }}
                style={{
                  display: this.props.path === "edit" ? "block" : "none"
                }}
              >
                <NavLink className="go-home" to="/">
                  Home
                </NavLink>
              </span>
            </Typography>
          </Toolbar>
        </AppBar>
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
    changePath: path => {
      dispatch({
        type: "PATH_CHANGED",
        path: path
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
