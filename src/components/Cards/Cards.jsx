import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";

import styles from "./Cards.module.css";

const Cards = (props) => {
  console.log(props, "cards");
  if (!props.data || !props.vaccineData) {
    console.log("loading");
    return "Loading...";
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={5} justify="center">
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5" gutterBottom>
              {props.data.positive}
            </Typography>
            <Typography variant="body2" gutterBottom>
              Total number of positive cases
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Daily Increase
            </Typography>
            <Typography variant="h5" gutterBottom>
              {props.data.dailyIncrease}
            </Typography>
            <Typography variant="body2" gutterBottom>
              New number of postiive cases.
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5" gutterBottom>
              {props.data.death}
            </Typography>
            <Typography variant="body2" gutterBottom>
              Number of deaths caused by Covid-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Vaccinations
            </Typography>
            <Typography variant="h5" gutterBottom>
              {
                props.vaccineData[props.vaccineData.length - 1]
                  .people_vaccinated
              }
            </Typography>
            <Typography variant="body2" gutterBottom>
              Number of people Vaccinated
            </Typography>
          </CardContent>
        </Grid>
        ;
      </Grid>
    </div>
  );
};

export default Cards;
