import * as React from "react";
import * as ReactDOM from "react-dom";

import { ContractInput, Contract } from "./type/Contract";
import { Rate } from "./type/Rate";

import "./main.css";

import ContractStore from "./store/ContractStore";
import ChartStore from "./store/ChartStore";

import RateChart from "./components/RateChart";
import ContractForm from "./components/ContractForm";
import ContractTable from "./components/ContractTable";

interface State {
  rates: Array<Rate>;
  contracts: Array<Contract>;
}

class App extends React.Component<{}, State> {
  state = {
    rates: [],
    contracts: []
  };

  componentDidMount() {
    ChartStore.fetchRate().then(rate =>
      this.setState({ rates: [...this.state.rates, rate] })
    );
    setInterval(() => {
      ChartStore.fetchRate().then(rate =>
        this.setState({ rates: [...this.state.rates, rate] })
      );
      // this.setState({
      //   rates: [...this.state.rates, { rate: Date.now(), time: new Date() }]
      // });
    }, 5000);
  }

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

  // TODO: implemnet UI for editing
  handleEdit = (contract: Contract, input: ContractInput) => {
    const contracts: Array<Contract> = this.state.contracts;
    const index = contracts.findIndex(c => c.id === contract.id);
    ContractStore.editContract(contract, input).then(edited => {
      this.setState({
        contracts: [
          ...contracts.slice(0, index),
          edited,
          ...contracts.slice(index + 1)
        ]
      });
    });
  };

  render() {
    return (
      <div className="app">
        <RateChart rates={this.state.rates} />
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
