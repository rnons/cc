import * as React from "react";

interface Props {
  contracts: any;
}

export default class ContractTable extends React.Component<Props> {
  render() {
    const rows = this.props.contracts.map((contract: any, index: number) => (
      <tr key={index}>
        <td>{contract}</td>
      </tr>
    ));
    return (
      <div className="app-table">
        <div>Contracts</div>
        <table>
          <tbody>{rows}</tbody>
        </table>
      </div>
    );
  }
}
