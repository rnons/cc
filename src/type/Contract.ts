export interface Contract {
  id: number;
  user: {
    name: string;
    surname: string;
  };
  amountInUsd: string;
  currency: string;
  date: string;
}

export interface ContractInput {
  userName: string;
  userSurname: string;
  amountInUsd: string;
  currency: string;
}
