import React, { useEffect, useState } from "react";
import {
  Cards,
  Chart,
  StateSelector,
  CommoditySelector,
  CommodityChart,
  VaccineChart,
  SpendingSelector,
  SpendingChart,
} from "./components";
import styles from "./App.module.css";
import { fetchData, fetchStateVaccinationData } from "./services";

function App() {
  //covid data on each state
  const [usData, setData] = useState();
  const [commodity, setCommodity] = useState("MEDICAL SUPPLIES");
  const [bracket, setBracket] = useState("125k+");
  const [vaccineData, setVaccineData] = useState();
  //current state selected
  /*
    TODO: create for state context if there is time
  */
  const [currentState, setState] = useState("US");

  const selectState = async (state) => {
    console.log(state);
    setData(await fetchData(state));
    setState(state);
    if (state == "US") {
    }
    setVaccineData(await fetchStateVaccinationData(state));
  };

  const selectCommodity = async (commodity) => {
    //console.log(commodity);
    //const commodityDataResponse = await fetchCommodityData(commodity);
    setCommodity(commodity);
    console.log(commodity);
    //setState(state);
    ////if (state == "US") {
    // }
    //setVaccineData(await fetchStateVaccinationData(state));
  };

  const selectBracket = async (bracket) => {
    console.log(bracket);
    //const commodityDataResponse = await fetchCommodityData(commodity);
    setBracket(bracket);
    console.log(bracket);
    //setState(state);
    ////if (state == "US") {
    // }
    //setVaccineData(await fetchStateVaccinationData(state));
  };

  useEffect(() => {
    const fetchAllData = async () => {
      const data = await fetchData();
      setData(data);
      setVaccineData(await fetchStateVaccinationData(currentState));
      //setCommodityData(await fetchCommodityData(commodity));
    };
    fetchAllData();
  }, []);

  return (
    <div className={styles.container}>
      <h1>Covid-19 Dashboard</h1>
      <StateSelector selectState={selectState} />
      <Cards vaccineData={vaccineData} data={usData} />
      <Chart currentState={currentState} />
      <h2>Consumer Spending Data</h2>
      <SpendingSelector selectBracket={selectBracket} />
      <SpendingChart bracket={bracket} />
      <h2>Consumer Analytics</h2>
      <CommoditySelector selectCommodity={selectCommodity} />
      <CommodityChart commodity={commodity} />
    </div>
  );
}

export default App;
