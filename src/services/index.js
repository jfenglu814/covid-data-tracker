import axios from "axios";

const url = "https://api.covidtracking.com/v1/";

//fetches USData
export const fetchData = async (state) => {
  let endPoint = "us/current.json";
  if (state && state != "US") {
    console.log(state);
    endPoint = `states/${state}/current.json`;
    try {
      const response = await axios.get(url + endPoint);
      const data = response.data;
      const USData = {
        positive: data.positive,
        death: data.death,
        dailyIncrease: data.positiveIncrease,
        dateUpdated: data.lastModified,
      };

      return USData;
    } catch (error) {
      console.log(error);
    }
  }
  try {
    const response = await axios.get(url + endPoint);
    const data = response.data[0];
    const USData = {
      positive: data.positive,
      death: data.death,
      dailyIncrease: data.positiveIncrease,
      dateUpdated: data.lastModified,
    };

    return USData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchUSDailyData = async (currentState) => {
  let endPoint = "us/daily.json";
  if (currentState && currentState != "US") {
    endPoint = `states/${currentState}/daily.json`;
    try {
      const response = await axios.get(url + endPoint);
      return response.data.reverse();
      //console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  try {
    const response = await axios.get(url + "us/daily.json");
    return response.data.reverse();
    //console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

export const fetchStates = async () => {
  try {
    const response = await axios.get(url + "states/info.json");

    return response.data;
  } catch (error) {}
};
