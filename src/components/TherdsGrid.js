import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

class TherdsGrid extends Component {
  render() {
    return (
      <div className="centered-grid">
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Paper className="paper">xs=12</Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className="paper">xs=12</Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className="paper">xs=12</Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default TherdsGrid;
