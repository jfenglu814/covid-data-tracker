import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import { fetchStates } from "../../services";

import styles from "./StateSelector.module.css";

const StateSelector = ({ selectState }) => {
  const [states, setState] = useState([]);

  //fetch list of states in the API
  useEffect(() => {
    const fetchStatesInformation = async () => {
      let stateList = await fetchStates();
      stateList = stateList.map((state) => state.state);
      setState(stateList);
    };

    fetchStatesInformation();
    console.log(states, "statepicker");
  }, []);

  //on state select pass current selected state back to parent
  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        defaultValue=""
        onChange={(e) => selectState(e.target.value)}
      >
        <option value="US">United States</option>
        {states.map((state) => (
          <option value={state}>{state}</option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default StateSelector;
