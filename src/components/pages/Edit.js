import React from "react";
import CenteredGrid from "../sherd/CenteredGrid";
import SidesGrid from "../sherd/SidesGrid";
import ThirdsGrid from "../sherd/ThirdsGrid";
import SplitGrid from "../sherd/SplitGrid";
import { connect } from "react-redux";

class Edit extends React.Component {
  render() {
    let gridId = this.props.match.params.gridId;
    let show = [false, false, false, false];
    show[gridId - 1] = true;

    return (
      <div className="edit-content">
        <div
          style={{ display: show[0] ? "block" : "none" }}
          className="edit-content-component"
        >
          <CenteredGrid> </CenteredGrid>
        </div>
        <div
          style={{ display: show[1] ? "block" : "none" }}
          className="edit-content-component"
        >
          <SidesGrid> </SidesGrid>
        </div>
        <div
          style={{ display: show[2] ? "block" : "none" }}
          className="edit-content-component"
        >
          <ThirdsGrid> </ThirdsGrid>
        </div>
        <div
          style={{ display: show[3] ? "block" : "none" }}
          className="edit-content-component"
        >
          <SplitGrid> </SplitGrid>
        </div>
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
)(Edit);
