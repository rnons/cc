import { ContractInput, Contract } from "../type/Contract";

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
}

export default new ContractStore();
