import * as React from "react";

import { ContractInput } from "../type/Contract";

interface Props {
  onSubmit: (input: ContractInput) => void;
}

export default class ContractForm extends React.Component<Props> {
  state = {
    userName: "",
    userSurname: "",
    amountInUsd: "",
    currency: ""
  };

  handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    });
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { userName, userSurname, amountInUsd, currency } = this.state;
    // some sort of validation

    const data = {
      userName,
      userSurname,
      amountInUsd,
      currency
    };
    this.props.onSubmit(data);
  };

  render() {
    const { userName, userSurname, amountInUsd, currency } = this.state;

    // depending on scenarios, username/surname can be filled automatically
    // render currency as a <select>
    return (
      <form onSubmit={this.handleSubmit}>
        <h3 className="mb-4">Contract form</h3>
        <div className="flex">
          <label className="mb-3 mr-3">
            <div>User name</div>
            <input
              className="block border"
              type="text"
              name="userName"
              value={userName}
              required
              onChange={this.handleChange}
            />
          </label>
          <label className="mb-3">
            <div>User surname</div>
            <input
              className="block border"
              type="text"
              name="userSurname"
              value={userSurname}
              required
              onChange={this.handleChange}
            />
          </label>
        </div>
        <label className="block mb-3">
          <div>Amount in USD</div>
          <input
            className="block border"
            type="number"
            name="amountInUsd"
            value={amountInUsd}
            required
            onChange={this.handleChange}
          />
        </label>
        <label className="mb-3">
          <div>Currency</div>
          <input
            className="block border"
            type="text"
            name="currency"
            value={currency}
            required
            onChange={this.handleChange}
          />
        </label>
        <button className="mt-4 bg-blue text-white py-2 px-4" type="submit">
          add
        </button>
      </form>
    );
  }
}
