import React, { useState, useEffect } from "react";
import { fetchSpendingData } from "../../services";
import { Line } from "react-chartjs-2";

import styles from "./SpendingChart.module.css";

const SpendingChart = ({ bracket }) => {
  const [spending, setSpending] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const spendingData = await fetchSpendingData(bracket);
      console.log(spendingData, "spending chart");
      setSpending(spendingData);
    };

    fetchData();
  }, [bracket]);

  const months = ["May", "June", "July", "August"];
  const lineChart =
    spending != undefined ? (
      <Line
        data={{
          labels: spending.map((num, index) => months[index]),
          datasets: [
            {
              data: spending.map((spent) => spent),
              label: "Total Spent",
              borderColor: "#3333ff",
              fill: false,
            },
          ],
        }}
        options={{
          title: {
            display: true,
            text: "Total spent by month",
          },
        }}
      />
    ) : null;

  return <div className={styles.container}>{lineChart}</div>;
};

export default SpendingChart;
