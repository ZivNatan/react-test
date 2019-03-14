import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

class SidesGrid extends Component {
  render() {
    return (
      <div className="centered-grid">
        <Grid container spacing={24} className="sides-grid-container">
          <Grid
            item
            xs={12}
            className="sides-grid-column sides-grid-column-left"
          >
            <Paper className="paper-long">xs=12</Paper>
          </Grid>
          <Grid
            item
            xs={12}
            className="sides-grid-column sides-grid-column-right"
          >
            <Paper className="paper-long">xs=12</Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default SidesGrid;
