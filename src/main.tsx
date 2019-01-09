import * as React from "react";
import * as ReactDOM from "react-dom";

import "./main.css";

class App extends React.Component {
  render() {
    return <div>hello world</div>;
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
