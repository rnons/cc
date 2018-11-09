import * as React from "react";

interface Props {
  onSubmit: any;
}

export default class ContractForm extends React.Component<Props> {
  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    this.props.onSubmit();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        Contract form
        <button type="submit">add</button>
      </form>
    );
  }
}
