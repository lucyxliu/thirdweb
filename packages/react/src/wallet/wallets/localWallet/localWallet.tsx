import { LocalWallet, WalletOptions } from "@thirdweb-dev/wallets";
import { LocalWalletConfigOptions, LocalWalletConfig } from "./types";
import { LocalWalletConnectUI } from "./LocalWalletConnectUI";

export const localWallet = (
  config?: LocalWalletConfigOptions,
): LocalWalletConfig => {
  return {
    id: LocalWallet.id,
    meta: { ...LocalWallet.meta, name: "Guest Wallet" },
    create: (options: WalletOptions) => new LocalWallet(options),
    config: {
      persist: config && config.persist !== undefined ? config.persist : true,
    },
    connectUI: LocalWalletConnectUI,
    isInstalled() {
      return false;
    },
  };
};
