import { Token } from "./Token";

export interface InfoWallet {
  address: string;
  tokensInfo: Token[];
  ethBalance: string;
}
