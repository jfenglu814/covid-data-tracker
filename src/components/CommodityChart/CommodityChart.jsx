import React, { useState, useEffect } from "react";
import { fetchCommodityData } from "../../services";
import { Line } from "react-chartjs-2";

import styles from "./CommodityChart.module.css";

const CommodityChart = ({ commodity }) => {
  const [preCovid, setPreCovid] = useState([]);
  const [postCovid, setPostCovid] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const covid = await fetchCommodityData(commodity);
      console.log(covid, "commodity chart");
      setPreCovid(covid.precovid);
      setPostCovid(covid.postcovid);
      console.log(preCovid, postCovid);
    };

    fetchData();
  }, [commodity]);

  const months = ["Jan", "Feb", "March", "April", "May", "June", "July"];
  const lineChart =
    preCovid != undefined ? (
      <Line
        data={{
          labels: preCovid.map((num, index) => months[index]),
          datasets: [
            {
              data: preCovid.map((price) => price),
              label: "2019",
              borderColor: "#3333ff",
              fill: false,
            },
            {
              data: postCovid.map((price) => price),
              label: "2020",
              borderColor: "red",
              backgroundColor: "rgba(255, 0, 0, 0.5)",
              fill: false,
            },
          ],
        }}
        options={{
          title: {
            display: true,
            text: "Purchases at Kroger between January and July",
          },
        }}
      />
    ) : null;

  return <div className={styles.container}>{lineChart}</div>;
};

export default CommodityChart;
