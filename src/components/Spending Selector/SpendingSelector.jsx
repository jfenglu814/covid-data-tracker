import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import { fetchStates } from "../../services";

import styles from "./SpendingSelector.module.css";

const SpendingSelector = ({ selectBracket }) => {
  const [bracket, setBracket] = useState([
    "<15k",
    "75k-99k",
    "50k-74k",
    "40k-49k",
    "30k-39k",
    "20k-29k",
    "15k-19k",
    "125k+",
    "100k-124k",
  ]);

  //fetch list of states in the API
  useEffect(() => {}, []);

  //on state select pass current selected state back to parent
  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        defaultValue=""
        onChange={(e) => selectBracket(e.target.value)}
      >
        {bracket.map((bracket) => (
          <option value={bracket}>{bracket}</option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default SpendingSelector;
