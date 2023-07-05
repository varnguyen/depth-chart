import React from "react";
import BidChart from "./components/BidChart";
import AskChart from "./components/AskChart";
import "./App.css";

function App() {
  return (
    <div className="App container">
      <div className="bid-chart">
        <BidChart />
      </div>
      <div className="ask-chart">
        <AskChart />
      </div>
    </div>
  );
}

export default App;
