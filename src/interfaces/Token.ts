export interface ITokenSwitchEnv {
  main_net: Token[];
  dev_net: Token[];
  test_net: Token[];
}

export interface Token {
  name: string;
  address: string;
  icon: string;
  balance?: string;
}
