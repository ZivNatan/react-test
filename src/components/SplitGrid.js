import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

class SplitGrid extends Component {
  render() {
    return (
      <div className="centered-grid">
        <Grid container spacing={24} className="split-grid-container">
          <Grid item xs={12} className="split-grid-row split-grid-row-top">
            <Paper className="paper">xs=12</Paper>
          </Grid>
          <Grid item xs={12} className="split-grid-row split-grid-row-bottom">
            <Paper className="paper">xs=12</Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default SplitGrid;
