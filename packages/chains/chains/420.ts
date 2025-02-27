import type { Chain } from "../src/types";
export default {
  "name": "Optimism Goerli Testnet",
  "chain": "ETH",
  "rpc": [
    "https://optimism-goerli.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://opt-goerli.g.alchemy.com/v2/${ALCHEMY_API_KEY}",
    "https://optimism-goerli.infura.io/v3/${INFURA_API_KEY}",
    "https://goerli.optimism.io/"
  ],
  "faucets": [
    "https://coinbase.com/faucets/optimism-goerli-faucet"
  ],
  "nativeCurrency": {
    "name": "Goerli Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "infoURL": "https://optimism.io",
  "shortName": "ogor",
  "chainId": 420,
  "networkId": 420,
  "icon": {
    "url": "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/optimism/512.png",
    "height": 512,
    "width": 512,
    "format": "png"
  },
  "testnet": true,
  "slug": "optimism-goerli"
} as const satisfies Chain;