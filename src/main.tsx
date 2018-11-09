import * as React from "react";
import * as ReactDOM from "react-dom";

import "./main.css";

import ContractForm from "./components/ContractForm";
import ContractTable from "./components/ContractTable";

class App extends React.Component {
  state = {
    contracts: []
  };

  handleSubmit = () => {
    this.setState({
      contracts: [...this.state.contracts, Date.now()]
    });
  };

  render() {
    return (
      <div className="app">
        <div className="app-chart">chart</div>
        <ContractForm onSubmit={this.handleSubmit} />
        <ContractTable contracts={this.state.contracts} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
