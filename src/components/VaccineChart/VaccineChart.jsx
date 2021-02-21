import React, { useState, useEffect } from "react";

import { Line } from "react-chartjs-2";

import styles from "./VaccineChart.module.css";

const VaccineChart = ({ vaccineData }) => {
  useEffect(() => {
    console.log(vaccineData);
  }, [vaccineData]);

  const lineChart =
    vaccineData != undefined ? (
      <Line
        data={{
          labels: vaccineData.map(({ date }) => date),
          datasets: [
            {
              data: vaccineData.map(
                ({ people_vaccinated }) => people_vaccinated
              ),
              label: "new vaccinations",
              borderColor: "#3333ff",
              fill: true,
            },
          ],
        }}
        options={{
          title: {
            display: true,
            text: "New Daily Vaccinations",
          },
        }}
      />
    ) : null;

  return <div className={styles.container}>{lineChart}</div>;
};

export default VaccineChart;
