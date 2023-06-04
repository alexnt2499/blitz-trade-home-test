import { InfoWallet } from "@/interfaces/InfoWallet";
import { formatEtherValue } from "./formatNumber";

export function formatExportData(data: InfoWallet[]): any {
  const formatData = data.map((item) => {
    return {
      Address: item.address,
      ETH_Balance: formatEtherValue(item.ethBalance),
      USDT_Balance: formatEtherValue(item.tokensInfo[0].balance ?? "0"),
      BNB_Balance: formatEtherValue(item.tokensInfo[1].balance ?? "0"),
      USDC_Balance: formatEtherValue(item.tokensInfo[2].balance ?? "0"),
      Matic_Balance: formatEtherValue(item.tokensInfo[3].balance ?? "0"),
    };
  });

  return formatData;
}
