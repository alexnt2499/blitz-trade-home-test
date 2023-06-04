import { InfoWallet } from "@/interfaces/InfoWallet";
import { formatAddress, formatEtherValue } from "@/utils/formatNumber";
import Image from "next/image";
import React, { FC, memo } from "react";

interface ICardItem {
  item: InfoWallet;
}

const CardItem: FC<ICardItem> = ({ item }) => {
  return (
    <div className="border border-gray-600 rounded-lg bg-card p-4 w-full mb-6">
      <div className="flex">
        <Image
          src="/images/common/avatar.png"
          width={50}
          height={50}
          alt="avt"
          className="rounded-lg"
        />

        <div className="ml-4">
          <p className=" font-mono">{formatAddress(item.address)}</p>
          <div className="flex gap-3">
            <div className="flex items-center ">
              <Image
                src="/images/tokens/eth.png"
                width={20}
                height={20}
                alt="avt"
              />
              <p className="ml-2 font-mono leading-6 text-sm">
                {formatEtherValue(item.ethBalance)}
              </p>
            </div>
            {item.tokensInfo.map((token) => {
              return (
                <div key={token.address} className="flex items-center">
                  <Image src={token.icon} width={20} height={20} alt="avt" />
                  <p className="ml-2 font-mono leading-6 text-sm">
                    {token.balance
                      ? formatEtherValue(token.balance)
                      : "loading..."}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(CardItem);
