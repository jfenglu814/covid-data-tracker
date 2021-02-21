import React, { useState, useEffect } from "react";
import { fetchUSDailyData } from "../../services";
import { Line, Bar } from "react-chartjs-2";

import styles from "./Chart.module.css";

const Chart = ({ currentState }) => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setDailyData(await fetchUSDailyData(currentState));
    };

    fetchData();
    console.log(dailyData, "dailyData fetch");
    console.log(currentState, "fetch");
  }, [currentState]);

  const lineChart =
    dailyData != undefined ? (
      <Line
        data={{
          labels: dailyData.map(({ date }) => date),
          datasets: [
            {
              data: dailyData.map(({ positiveIncrease }) => positiveIncrease),
              label: "Positive Cases",
              borderColor: "#3333ff",
              fill: true,
            },
          ],
        }}
      />
    ) : null;

  return <div className={styles.container}>{lineChart}</div>;
};

export default Chart;
