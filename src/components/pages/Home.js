import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import CenteredGrid from "../sherd/CenteredGrid";
import SidesGrid from "../sherd/SidesGrid";
import ThirdsGrid from "../sherd/ThirdsGrid";
import SplitGrid from "../sherd/SplitGrid";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

class Home extends React.Component {
  render() {
    return (
      <div className="content">
        <Grid
          className="main-grid"
          container
          spacing={24}
       
        >
          <div className="main-grid-child">
            <NavLink
              to="/edit/1"
              onClick={() => {
                this.props.changePath("edit");
              }}
            >
              <CenteredGrid> </CenteredGrid>
            </NavLink>
          </div>
          <div className="main-grid-child">
            <NavLink
              to="/edit/2"
              onClick={() => {
                this.props.changePath("edit");
              }}
            >
              <SidesGrid> </SidesGrid>
            </NavLink>
          </div>
          <div className="main-grid-child">
            <NavLink
              to="/edit/3"
              onClick={() => {
                this.props.changePath("edit");
              }}
            >
              <ThirdsGrid> </ThirdsGrid>
            </NavLink>
          </div>
          <div className="main-grid-child">
            <NavLink
              to="/edit/4"
              onClick={() => {
                this.props.changePath("edit");
              }}
            >
              <SplitGrid> </SplitGrid>
            </NavLink>
          </div>
        </Grid>
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
    },
    boxDroped: box => {
      dispatch({
        type: "BOX_MOVED",
        payload: {
          id: box.id,
          parentId: box.parentId,
          inBoxesContainer: box.inBoxesContainer
        }
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
