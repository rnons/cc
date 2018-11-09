import * as React from "react";

import { Contract } from "../type/Contract";

interface Props {
  contracts: Array<Contract>;
  onDelete: (contract: Contract) => void;
}

const HEADS = ["User", "Amount in USD", "Currency", "Date", "Actions"];

export default class ContractTable extends React.Component<Props> {
  renderActions(contract: Contract) {
    return (
      <ul className="list-reset">
        <li>
          <button
            className="bg-red text-white p-px"
            onClick={this.props.onDelete.bind(null, contract)}
          >
            delete
          </button>
        </li>
      </ul>
    );
  }

  render() {
    // Using plain table for now. Can add pagination or virtualized later
    const headCols = HEADS.map((head: string, index: number) => (
      <td key={index}>{head}</td>
    ));
    const rows = this.props.contracts.map((contract: Contract) => (
      <tr key={contract.id}>
        <td>
          {contract.user.name} {contract.user.surname}
        </td>
        <td>{contract.amountInUsd}</td>
        <td>{contract.currency}</td>
        <td>{contract.date}</td>
        <td>{this.renderActions(contract)}</td>
      </tr>
    ));
    return (
      <div className="app-table">
        <div>Contracts</div>
        <table>
          <thead>
            <tr>{headCols}</tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    );
  }
}
