import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import { fetchStates } from "../../services";

import styles from "./CommoditySelector.module.css";

const CommoditySelector = ({ selectCommodity }) => {
  const [states, setState] = useState([
    "MEDICAL SUPPLIES",
    "ACTIVITY",
    "CLOTHING",
    "GROCERY STAPLE",
    "ALCOHOL",
    "ELECTRONICS",
    "MEAT-BEEF",
    "PERSONAL CARE",
    "AUTO",
    "PRODUCE",
    "FROZEN FOOD",
    "BULK PRODUCTS",
  ]);

  //fetch list of states in the API
  useEffect(() => {}, []);

  //on state select pass current selected state back to parent
  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        defaultValue=""
        onChange={(e) => selectCommodity(e.target.value)}
      >
        {states.map((state) => (
          <option value={state}>{state}</option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CommoditySelector;
