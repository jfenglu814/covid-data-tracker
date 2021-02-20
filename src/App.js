import React, { useEffect, useState } from "react";
import { Cards, StateSelector } from "./components";

function App() {
  return (
    <div>
      <StateSelector />
      <Cards />
    </div>
  );
}

export default App;
