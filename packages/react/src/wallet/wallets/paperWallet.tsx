import { PaperWallet } from "@thirdweb-dev/wallets";
import {
  WalletConfig,
  WalletOptions,
  SelectUIProps,
  ConnectUIProps,
  useConnect,
} from "@thirdweb-dev/react-core";
import { useEffect, useRef } from "react";
import { Spinner } from "../../components/Spinner";
import { Flex } from "../../components/basic";
import { InputSelectionUI } from "./InputSelectionUI";

type PaperConfig = { clientId: string };

export const paperWallet = (
  config: PaperConfig,
): WalletConfig<PaperWallet, PaperConfig> => {
  return {
    id: PaperWallet.id,
    meta: PaperWallet.meta,
    create(options: WalletOptions) {
      return new PaperWallet({ ...options, ...config });
    },
    config,
    selectUI: PaperSelectionUI,
    connectUI: PaperConnectionUI,
  };
};

const PaperSelectionUI: React.FC<SelectUIProps<PaperWallet, PaperConfig>> = (
  props,
) => {
  return (
    <InputSelectionUI
      onSelect={props.onSelect}
      placeholder="Enter your email address"
      name="email"
      type="email"
      errorMessage={(input) => {
        const emailRegex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,})$/g;
        const isValidEmail = emailRegex.test(input);
        if (!isValidEmail) {
          return "Invalid email address";
        }
      }}
      emptyErrorMessage="email address is required"
      supportedWallets={props.supportedWallets}
    />
  );
};

const PaperConnectionUI: React.FC<ConnectUIProps<PaperWallet, PaperConfig>> = ({
  close,
  walletConfig,
  open,
  selectionData,
  supportedWallets,
}) => {
  const connectPrompted = useRef(false);
  const connect = useConnect();
  const singleWallet = supportedWallets.length === 1;
  useEffect(() => {
    if (connectPrompted.current) {
      return;
    }
    connectPrompted.current = true;

    (async () => {
      close();
      try {
        await connect(walletConfig, { email: selectionData });
      } catch (e) {
        if (!singleWallet) {
          open();
        }
        console.error(e);
      }
    })();
  }, [connect, walletConfig, close, open, singleWallet, selectionData]);

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      style={{
        minHeight: "250px",
      }}
    >
      <Spinner size="md" color="primary" />
    </Flex>
  );
};
