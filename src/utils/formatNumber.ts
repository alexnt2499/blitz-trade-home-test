import web3 from "@/services/web3Init";

export function formatEtherValue(value: string, decimals = 4): string {
  const parsedValue = parseFloat(formatWeiToEther(value));
  const formattedValue = parsedValue.toLocaleString(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
  if (formattedValue === "0.0000") return "0";

  return formattedValue;
}

export function formatAddress(address: string): string {
  const formattedAddress = address.toLowerCase();
  return `0x${formattedAddress.slice(2, 6)}...${formattedAddress.slice(-4)}`;
}

// Convert Wei to Ether
export function formatWeiToEther(value: string): string {
  const etherValue = web3.utils.fromWei(value, "ether");
  return etherValue;
}
