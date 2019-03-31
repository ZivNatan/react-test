import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";

class CenteredGrid extends Component {
  componentDidMount = () => {
    let localStorgeData = JSON.parse(localStorage.getItem("boxsPositions"));
    if (localStorgeData) {
      this.updateHtml(localStorgeData);
    }
  };
  updateHtml = localStorgeData => {
    localStorgeData.map(item => {
      if (item.parentId.indexOf("Centered") === 0) {
        let box = document.getElementById(item.id);
        if (box === null) {
          box = document.getElementById("clone-" + item.id).cloneNode(true);
          box.id = item.id;
          box.ondragstart = function(e) {
            if (e.target.id) {
              e.dataTransfer.setData("text", e.target.id);
            }
          };
        }
        document.getElementById(item.parentId).appendChild(box);
      }
      return item;
    });
  };

  allowDrop = ev => {
    ev.preventDefault();
  };

  drop = ev => {
    ev.preventDefault();

    if (ev.dataTransfer) {
      var boxId = ev.dataTransfer.getData("text");
      var box = document.getElementById(boxId);
      ev.target.appendChild(box);
      this.updateState(ev, boxId);
    }
  };

  drag = ev => {
    console.log("this is drag event", ev);
    if (ev.target.id) {
      ev.dataTransfer.setData("text", ev.target.id);
    }
  };

  updateState(ev, boxId) {
    let action = {
      type: "BOX_MOVED",
      id: boxId,
      parentId: ev.target.id
    };
    this.props.boxDroped(action);
  }

  render() {
    return (
      <div className="centered-grid">
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Paper
              id="CenteredA"
              className="paper"
              onDrop={e => {
                this.drop(e);
              }}
              onDragOver={e => {
                this.allowDrop(e);
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <Paper
              id="CenteredB"
              className="paper"
              onDrop={e => {
                this.drop(e);
              }}
              onDragOver={e => {
                this.allowDrop(e);
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <Paper
              id="CenteredC"
              className="paper"
              onDrop={e => {
                this.drop(e);
              }}
              onDragOver={e => {
                this.allowDrop(e);
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <Paper
              id="CenteredD"
              className="paper"
              onDrop={e => {
                this.drop(e);
              }}
              onDragOver={e => {
                this.allowDrop(e);
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <Paper
              id="CenteredE"
              className="paper"
              onDrop={e => {
                this.drop(e);
              }}
              onDragOver={e => {
                this.allowDrop(e);
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <Paper
              id="CenteredF"
              className="paper"
              onDrop={e => {
                this.drop(e);
              }}
              onDragOver={e => {
                this.allowDrop(e);
              }}
            />
          </Grid>
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
)(CenteredGrid);
