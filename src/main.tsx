import * as React from "react";
import * as ReactDOM from "react-dom";

import "./main.css";

const App = () => {
  return (
    <div className="app">
      <div className="chart">chart</div>
      <div className="form">form</div>
      <div className="table">table</div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
