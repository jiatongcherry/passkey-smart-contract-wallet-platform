import { fallback, http } from "viem";


const alchemyBundlerRpcUrl = http(
  `https://eth-sepolia.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`
  // `https://polygon-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`
);

export const transport = alchemyBundlerRpcUrl;
