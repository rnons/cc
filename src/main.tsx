import * as React from "react";
import * as ReactDOM from "react-dom";

import { ContractInput, Contract } from "./type/Contract";

import "./main.css";

import ContractStore from "./store/ContractStore";

import ContractForm from "./components/ContractForm";
import ContractTable from "./components/ContractTable";

interface State {
  contracts: Array<Contract>;
}

class App extends React.Component<{}, State> {
  state = {
    contracts: []
  };

  handleSubmit = (input: ContractInput) => {
    ContractStore.addContract(input).then(contract => {
      this.setState({
        contracts: [...this.state.contracts, contract]
      });
    });
  };

  handleDelete = (contract: Contract) => {
    const contracts: Array<Contract> = this.state.contracts;
    ContractStore.deleteContract(contract).then(id => {
      this.setState({
        contracts: contracts.filter(c => c.id !== id)
      });
    });
  };

  render() {
    return (
      <div className="app">
        <div className="app-chart">chart</div>
        <ContractForm onSubmit={this.handleSubmit} />
        <ContractTable
          contracts={this.state.contracts}
          onDelete={this.handleDelete}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
