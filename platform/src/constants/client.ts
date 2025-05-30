import { createPublicClient, http } from "viem";
import { sepolia, polygon } from "viem/chains";

export const CHAIN = {
  ...sepolia,
};

export const transport = http(process.env.NEXT_PUBLIC_RPC_ENDPOINT);

export const SEPOLIA_ETH_TESTNET_PUBLIC_CLIENT = createPublicClient({
  chain: sepolia,
  transport,
});

export const POLYGON_PUBLIC_CLIENT = createPublicClient({
  chain: polygon,
  transport: http(),
});
