import React, { useEffect, useState } from "react";
import { Cards, Chart, StateSelector } from "./components";
import styles from "./App.module.css";
import { fetchData, fetchStateVaccinationData } from "./services";

function App() {
  //covid data on each state
  const [usData, setData] = useState();
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

    console.log(currentState);
    console.log(vaccineData);
    console.log(usData);
  };

  useEffect(() => {
    const fetchAllData = async () => {
      const data = await fetchData();
      setData(data);
      setVaccineData(await fetchStateVaccinationData(currentState));
    };
    fetchAllData();
  }, []);

  return (
    <div className={styles.container}>
      <StateSelector selectState={selectState} />
      <Cards vaccineData={vaccineData} data={usData} />
      <Chart currentState={currentState} />
    </div>
  );
}

export default App;
