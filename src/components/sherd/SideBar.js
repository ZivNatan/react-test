import React from "react";
import { connect } from "react-redux";

class SideBar extends React.Component {
  allowDrop = ev => {
    ev.preventDefault();
  };

  drop = ev => {
    ev.preventDefault();

    var data = ev.dataTransfer.getData("text");
    var box = document.getElementById(data);
    ev.target.appendChild(box);

    let action = {
      type: "BOX_MOVED",
      id: data,
      parentId: ev.target.id
    };
    this.props.boxDroped(action);
  };

  drag = ev => {
    if (ev.target.id) {
      ev.dataTransfer.setData("text", ev.target.id);
    }
  };

  // mobileEvents = () => {
  //   for (let i = 0; i < document.getElementsByClassName("box").length; i++) {
  //     document
  //       .getElementsByClassName("box")
  //       [i].addEventListener("touchleave", this.drop, false);
  //     document
  //       .getElementsByClassName("box")
  //       [i].addEventListener("touchmove", this.drag, false);
  //   }
  // };
  //    this.mobileEvents();

  render() {
    return (
      <div
        id="sideBar"
        onDrop={e => {
          this.drop(e);
        }}
        onDragOver={e => {
          this.allowDrop(e);
        }}
      >
        <div
          id="greenBox"
          className="box green-box"
          draggable="true"
          onDragStart={e => {
            this.drag(e, "pinkBox");
          }}
        />
        <div
          id="pinkBox"
          className="box pink-box"
          draggable="true"
          onDragStart={e => {
            this.drag(e, "pinkBox");
          }}
        />
        <div
          id="blueBox"
          className="box blue-box"
          draggable="true"
          onDragStart={e => {
            this.drag(e, "blueBox");
          }}
        />
        <div
          id="orangeBox"
          className="box orange-box"
          draggable="true"
          onDragStart={e => {
            this.drag(e, "orangeBox");
          }}
        />
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
    boxDroped: box => {
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
)(SideBar);
