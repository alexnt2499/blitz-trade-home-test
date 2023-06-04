/* eslint-disable react-hooks/exhaustive-deps */
import { Wallets } from "@/configs";
import { TokenABI, Tokens } from "@/configs";
import { InfoWallet } from "@/interfaces/InfoWallet";
import { Token } from "@/interfaces/Token";
import web3 from "@/services/web3Init";
import React, {
  FC,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

export interface IGlobalDataContext {
  listInfoAddress: InfoWallet[];
  isLoading: Boolean;
}

export const GlobalDataContext = createContext<IGlobalDataContext>({
  listInfoAddress: [],
  isLoading: true,
});

interface IGlobalDataProvider {
  children: ReactNode;
}

export const GlobalDataProvider: FC<IGlobalDataProvider> = ({ children }) => {
  const [listInfoAddress, setListInfoAddress] = useState<InfoWallet[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    getInfoWallets();
  }, []);

  const getBalanceOfAddress = async (ownerAddress: string) => {
    const arrSync = [];
    for (let i = 0; i < Tokens.main_net.length; i++) {
      const element = Tokens.main_net[i];
      const tokenContract = new web3.eth.Contract(TokenABI, element.address);
      const balance = tokenContract.methods.balanceOf(ownerAddress).call();
      arrSync.push(balance);
    }
    const arrBalance = await Promise.all(arrSync);

    const formatBalance = arrBalance.map((item, index) => {
      return {
        ...Tokens.main_net[index],
        balance: item,
      };
    });

    return formatBalance as Token[];
  };

  const getEthBalanceOfAddress = async (ownerAddress: string) => {
    const balance = await web3.eth.getBalance(ownerAddress);
    return balance;
  };

  const getInfoWallets = async () => {
    setIsLoading(true);
    const arrSync = [];
    const arrSyncEthBalance = [];

    for (let i = 0; i < Wallets.length; i++) {
      const tokenInfo = getBalanceOfAddress(Wallets[i]);
      const ethBalance = getEthBalanceOfAddress(Wallets[i]);

      arrSync.push(tokenInfo);
      arrSyncEthBalance.push(ethBalance);
    }

    const arrInfoWallet: Token[][] = await Promise.all(arrSync);
    const arrEthBalance: string[] = await Promise.all(arrSyncEthBalance);

    const formatInfoWallet: InfoWallet[] = arrInfoWallet.map((item, index) => {
      return {
        address: Wallets[index],
        tokensInfo: item,
        ethBalance: arrEthBalance[index],
      };
    });

    setListInfoAddress(formatInfoWallet);
    setIsLoading(false);
  };

  return (
    <GlobalDataContext.Provider value={{ listInfoAddress, isLoading }}>
      {children}
    </GlobalDataContext.Provider>
  );
};

export const useGlobalData = () => useContext(GlobalDataContext);
