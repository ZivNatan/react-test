import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import CenteredGrid from "../components/CenteredGrid";
import SidesGrid from "../components/SidesGrid";
import TherdsGrid from "../components/TherdsGrid";
import SplitGrid from "../components/SplitGrid";

const MyList = () => {
  return (
    <div className="content">
      <Grid
        className="main-grid"
        container
        spacing={24}
        style={{ padding: 24 }}
      >
        <div className="main-grid-child">
          <CenteredGrid> </CenteredGrid>
        </div>
        <div className="main-grid-child">
          <SidesGrid> </SidesGrid>
        </div>
        <div className="main-grid-child">
          <TherdsGrid> </TherdsGrid>
        </div>
        <div className="main-grid-child">
          <SplitGrid> </SplitGrid>
        </div>
      </Grid>
    </div>
  );
};

export default MyList;
