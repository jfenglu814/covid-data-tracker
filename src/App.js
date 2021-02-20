import React, { useEffect, useState } from "react";
import { Cards, Chart, StateSelector } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./services";

function App() {
  const [usData, setData] = useState();
  const [currentState, setState] = useState("");

  const selectState = async (state) => {
    console.log(state);
    setData(await fetchData(state));
    setState(state);
    console.log(currentState);
    console.log(usData);
  };

  useEffect(() => {
    const fetchAllData = async () => {
      const data = await fetchData();
      setData(data);
    };
    fetchAllData();
  }, []);

  return (
    <div className={styles.container}>
      <StateSelector selectState={selectState} />
      <Cards data={usData} />
    </div>
  );
}

export default App;
