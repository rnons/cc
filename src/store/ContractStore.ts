import { ContractInput, Contract } from "../type/Contract";

// Can be adapted to real or mock api. Or even use localStorage.
class ContractStore {
  addContract(input: ContractInput): Promise<Contract> {
    const { userName, userSurname, amountInUsd, currency } = input;

    const contract = {
      id: Date.now(),
      user: {
        name: userName,
        surname: userSurname
      },
      amountInUsd,
      currency,
      date: new Date().toISOString()
    };

    return Promise.resolve(contract);
  }

  deleteContract(contract: Contract): Promise<number> {
    return Promise.resolve(contract.id);
  }

  editContract(contract: Contract, input: ContractInput): Promise<Contract> {
    const { userName, userSurname, amountInUsd, currency } = input;
    const edited = {
      id: contract.id,
      user: {
        name: userName,
        surname: userSurname
      },
      amountInUsd,
      currency,
      // it's better to have an extra editedAt field
      date: new Date().toISOString()
    };

    return Promise.resolve(edited);
  }
}

export default new ContractStore();
