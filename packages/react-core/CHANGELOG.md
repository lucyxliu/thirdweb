# @thirdweb-dev/react-core

## 3.13.0

### Minor Changes

- [#1114](https://github.com/thirdweb-dev/js/pull/1114) [`2283e71a`](https://github.com/thirdweb-dev/js/commit/2283e71acaaf3d15eb2d6121682f1d2a81eec4f3) Thanks [@adam-maj](https://github.com/adam-maj)! - Switch to server-side payload generation

### Patch Changes

- [#1111](https://github.com/thirdweb-dev/js/pull/1111) [`21627c03`](https://github.com/thirdweb-dev/js/commit/21627c03d1bb1658fee19b12d580faa6c7f048d9) Thanks [@adam-maj](https://github.com/adam-maj)! - Update expiration dates for auth

- Updated dependencies [[`ce36322b`](https://github.com/thirdweb-dev/js/commit/ce36322b383af73905894b73f9409a146359ffb0), [`c60658ed`](https://github.com/thirdweb-dev/js/commit/c60658ed8c94867cca831b0d5535006da5b40aa6), [`aa9e952c`](https://github.com/thirdweb-dev/js/commit/aa9e952cb519a47ed112d2905b1f3787863035b6), [`564eaccf`](https://github.com/thirdweb-dev/js/commit/564eaccf480a81f36db43c782392595a5021e5ac), [`6aee0413`](https://github.com/thirdweb-dev/js/commit/6aee0413439b9ca408879bbb3c38c538c89d01af), [`e93aa70e`](https://github.com/thirdweb-dev/js/commit/e93aa70ef0093a2526404e11b7ddae8fb98c213b), [`51bbd3d1`](https://github.com/thirdweb-dev/js/commit/51bbd3d1bccbb92a1405ea50f6c178c091a90f20), [`9b20fc9a`](https://github.com/thirdweb-dev/js/commit/9b20fc9ad2d303edc31f44fbd2ea3b4dcf35d11e)]:
  - @thirdweb-dev/sdk@3.10.20
  - @thirdweb-dev/wallets@0.2.25

## 3.12.4

### Patch Changes

- Updated dependencies [[`23d90b3e`](https://github.com/thirdweb-dev/js/commit/23d90b3e779a5bfdb7058b8c51349d9c278fcbce), [`cc56037e`](https://github.com/thirdweb-dev/js/commit/cc56037e64560b9e0fc16eb0ac7cc2e47e2c9fdf), [`67450789`](https://github.com/thirdweb-dev/js/commit/67450789473b6008b86453ee4f4c7b99461223a6)]:
  - @thirdweb-dev/sdk@3.10.19
  - @thirdweb-dev/storage@1.1.4
  - @thirdweb-dev/wallets@0.2.24

## 3.12.3

### Patch Changes

- [#1068](https://github.com/thirdweb-dev/js/pull/1068) [`fd7111d5`](https://github.com/thirdweb-dev/js/commit/fd7111d5449b8315d326c308a021eed335446e19) Thanks [@MananTank](https://github.com/MananTank)! - add `theme` in `WalletConfig.selectUI` to allow creating selection UI that follows the theme of the wallet Modal

- [#1065](https://github.com/thirdweb-dev/js/pull/1065) [`bd86661f`](https://github.com/thirdweb-dev/js/commit/bd86661f54ca2f1eb09cbae35c704dc79be1b63a) Thanks [@iketw](https://github.com/iketw)! - [ReactNative] Add support for signing in with email/phone using magic sdk

  Devs can now add a new supportedWallet:

  ```javascript
  import { Goerli } from '@thirdweb-dev/chains';
  import { ThirdwebProvider, magicWallet } from '@thirdweb-dev/react-native';

  <ThirdwebProvider
      activeChain={Goerli}
      supportedWallets={[
      magicWallet({
          apiKey: 'magic_api_key',
      }),
  ]}>
  ```

- [#1067](https://github.com/thirdweb-dev/js/pull/1067) [`e21bdd03`](https://github.com/thirdweb-dev/js/commit/e21bdd0328d9c52d58295aa4012fc11cde83b60a) Thanks [@MananTank](https://github.com/MananTank)! - Return wallet instance from `useConnect` hook instead of returning nothing

  ```diff
  const connect = useConnect();

  - await connect(walletConfig)
  + const walletInstance = await connect(walletConfig)
  ```

- Updated dependencies [[`2f1df0b5`](https://github.com/thirdweb-dev/js/commit/2f1df0b5354a8ee55089b2c1e61c058788d890f1), [`189daf02`](https://github.com/thirdweb-dev/js/commit/189daf0280a90ed730200088948526a594da3408), [`afae0873`](https://github.com/thirdweb-dev/js/commit/afae0873b0e3f9741f5a9c44c5d255f38c6a9111), [`bba9767a`](https://github.com/thirdweb-dev/js/commit/bba9767adfe20e41055450b86e4448fcb2119855), [`c6e74ef0`](https://github.com/thirdweb-dev/js/commit/c6e74ef0b00210f52e6778c548061376d3ba7001), [`ee4c7de2`](https://github.com/thirdweb-dev/js/commit/ee4c7de25cb63f99f33b90da8e26293bbfbe6f3e), [`bd86661f`](https://github.com/thirdweb-dev/js/commit/bd86661f54ca2f1eb09cbae35c704dc79be1b63a), [`68fa1896`](https://github.com/thirdweb-dev/js/commit/68fa1896f75d3514e00cc380924fd8bc623064f0), [`f7b352a5`](https://github.com/thirdweb-dev/js/commit/f7b352a585a23726eaa3be116f65db56b005f4d8), [`4a1d7581`](https://github.com/thirdweb-dev/js/commit/4a1d75811058d6974616bdc12a6040cea5444e40), [`bdabbef7`](https://github.com/thirdweb-dev/js/commit/bdabbef71a2421a2dceb384f93bb6a59a3ddf007), [`59206233`](https://github.com/thirdweb-dev/js/commit/59206233e15ccfe3dc32047060055219d35938f2), [`292a321a`](https://github.com/thirdweb-dev/js/commit/292a321a95ed2d847097eed205353dd69eeb8d54), [`98efd090`](https://github.com/thirdweb-dev/js/commit/98efd090f63cfd9dfed7b89b20b6e43db88cf75c), [`8eecf4c2`](https://github.com/thirdweb-dev/js/commit/8eecf4c2d5b0d6447ad5b9cdbf0269818bbb3498), [`bd86661f`](https://github.com/thirdweb-dev/js/commit/bd86661f54ca2f1eb09cbae35c704dc79be1b63a), [`f3b2ae3f`](https://github.com/thirdweb-dev/js/commit/f3b2ae3f6d9c66356c521d3b9c2a6c096dbb4b57), [`d5651006`](https://github.com/thirdweb-dev/js/commit/d565100614d7d4e256554f998b8ce978a566051c), [`4f99ccb4`](https://github.com/thirdweb-dev/js/commit/4f99ccb49c584946de709fbc01017611d2828b76), [`da576108`](https://github.com/thirdweb-dev/js/commit/da5761080288c3b325f54fb56c80f96405a1cb5d), [`c85810ee`](https://github.com/thirdweb-dev/js/commit/c85810eee318b10eee4ada61828adaa51f94ea6c), [`6fd10f94`](https://github.com/thirdweb-dev/js/commit/6fd10f94b469dc5659e2ff4ce92a5aff86f3c89d), [`5f1e6abb`](https://github.com/thirdweb-dev/js/commit/5f1e6abb391f5c58dbdb207f569b3dd0b5d4729c), [`a034b032`](https://github.com/thirdweb-dev/js/commit/a034b0321fd0113ed51d95d538b5c3020615c227), [`35984362`](https://github.com/thirdweb-dev/js/commit/35984362b0a60e5b9c3d3c9731450a8f47deb1c4)]:
  - @thirdweb-dev/sdk@3.10.18
  - @thirdweb-dev/wallets@0.2.23
  - @thirdweb-dev/chains@0.1.19

## 3.12.2

### Patch Changes

- Updated dependencies [[`30e5593d`](https://github.com/thirdweb-dev/js/commit/30e5593dd1ce9abd809ad216a1cfce77b897093c), [`30e5593d`](https://github.com/thirdweb-dev/js/commit/30e5593dd1ce9abd809ad216a1cfce77b897093c)]:
  - @thirdweb-dev/wallets@0.2.22
  - @thirdweb-dev/chains@0.1.18
  - @thirdweb-dev/sdk@3.10.17

## 3.12.1

### Patch Changes

- [#1037](https://github.com/thirdweb-dev/js/pull/1037) [`d5123044`](https://github.com/thirdweb-dev/js/commit/d51230441a097734be092c42b45dea07629e65fa) Thanks [@jnsdls](https://github.com/jnsdls)! - update ipfs gateways - add more fallbacks

- Updated dependencies [[`b6f48e10`](https://github.com/thirdweb-dev/js/commit/b6f48e1088b5d36a51103de4afda53179029faaf), [`d5123044`](https://github.com/thirdweb-dev/js/commit/d51230441a097734be092c42b45dea07629e65fa), [`3c8c5d56`](https://github.com/thirdweb-dev/js/commit/3c8c5d56f2a21c0918fede71061c6745f2956f83), [`907d97be`](https://github.com/thirdweb-dev/js/commit/907d97bedef7331148bdfe8b9bf1e19459282e4c)]:
  - @thirdweb-dev/wallets@0.2.21
  - @thirdweb-dev/storage@1.1.3
  - @thirdweb-dev/chains@0.1.17
  - @thirdweb-dev/sdk@3.10.16

## 3.12.0

### Minor Changes

- [#993](https://github.com/thirdweb-dev/js/pull/993) [`b1ede491`](https://github.com/thirdweb-dev/js/commit/b1ede491fbfbeca0ff3d6f5a6162546671bf8b99) Thanks [@0xfrosty](https://github.com/0xfrosty)! - Add React hook useBuyDirectListing() to buy a direct listing in a MarketplaceV3 contract

### Patch Changes

- [#1015](https://github.com/thirdweb-dev/js/pull/1015) [`39bd9630`](https://github.com/thirdweb-dev/js/commit/39bd963015ac00a1e4da2d0b4c9d85b334c7ad46) Thanks [@MananTank](https://github.com/MananTank)! - - add `selectUI` api in `WalletConfig` to allow rendering a custom UI for selecting a wallet

  - Render an input for paper wallet and magic link using `selectUI` api
  - add prop `modalTitle` on `ConnectWallet` to configure a custom title for the modal
  - add props `selectionData`, `setSelectionData` and `supportedWallets` on `connectUI`

- [#996](https://github.com/thirdweb-dev/js/pull/996) [`c3645c45`](https://github.com/thirdweb-dev/js/commit/c3645c451b5e9a0fcf651fa07eb0e31ebf1882ca) Thanks [@MananTank](https://github.com/MananTank)! - - add `theme` in `ConfiguredWallet.connectUI`'s props - to use theme aware UI for wallets

  - add `useWalletConfig` hook to get the `ConfiguredWallet` object for active wallet
  - add hooks `useSetConnectedWallet`, `useSetConnectionStatus`
  - rename `useActiveChain` to `useChain` - keep the `useActiveChain` also with deprecated tag
  - make `useSafe` hook await-able by returning the promise of connect() call
  - add hook `useSmartWallet`
  - allow rendering custom wallet details button via `<ConnectWallet detailsButton={} />` prop
  - Rename "Export" to "Backup" in local wallet UI

- [#1011](https://github.com/thirdweb-dev/js/pull/1011) [`470e0a14`](https://github.com/thirdweb-dev/js/commit/470e0a144db6aa03e7789e231bbdfae43144f0e0) Thanks [@MananTank](https://github.com/MananTank)! - rename ConfiguredWallet to WalletConfig

  ```diff
  - import { ConfiguredWallet } from '@thirdweb-dev/react';
  + import { WalletConfig } from '@thirdweb-dev/react';
  ```

- [#989](https://github.com/thirdweb-dev/js/pull/989) [`8db78299`](https://github.com/thirdweb-dev/js/commit/8db78299ea6cfb51d93b91bb1a351644a83c73d2) Thanks [@iketw](https://github.com/iketw)! - [React/ReactNative] Updated useThirdwebWallet to useWalletContext

- Updated dependencies [[`e9b69300`](https://github.com/thirdweb-dev/js/commit/e9b69300d15b233609f1ed897256ec9a1eef3e28), [`49ec2d17`](https://github.com/thirdweb-dev/js/commit/49ec2d171ecb1c9240398b7b486a452eb9429979), [`799d98e8`](https://github.com/thirdweb-dev/js/commit/799d98e86258677ab72931fa8397aee653fe8b34), [`c3645c45`](https://github.com/thirdweb-dev/js/commit/c3645c451b5e9a0fcf651fa07eb0e31ebf1882ca), [`470e0a14`](https://github.com/thirdweb-dev/js/commit/470e0a144db6aa03e7789e231bbdfae43144f0e0), [`738c0ec6`](https://github.com/thirdweb-dev/js/commit/738c0ec6c4190aa2252233c1382aed5d982cc7b8), [`d495a4b8`](https://github.com/thirdweb-dev/js/commit/d495a4b8a6e0599e5b4611620f3fded80a411173), [`482f6d1b`](https://github.com/thirdweb-dev/js/commit/482f6d1b58ac99b331fc750d3eeb6082556fd526), [`e4356e76`](https://github.com/thirdweb-dev/js/commit/e4356e76d1506624afe2eb6feeaf57dc376f372f), [`9886c858`](https://github.com/thirdweb-dev/js/commit/9886c858d9c8d0f677aba6572dbf5cc6c876edf2), [`8db78299`](https://github.com/thirdweb-dev/js/commit/8db78299ea6cfb51d93b91bb1a351644a83c73d2), [`4f843833`](https://github.com/thirdweb-dev/js/commit/4f8438335e3e3731b67ae271cb34c383832242a0)]:
  - @thirdweb-dev/sdk@3.10.15
  - @thirdweb-dev/chains@0.1.16
  - @thirdweb-dev/wallets@0.2.20

## 3.11.11

### Patch Changes

- Updated dependencies [[`32908b76`](https://github.com/thirdweb-dev/js/commit/32908b76832c60e91a0a6e40dbdb1c8f56e9e5be), [`6a4aab0b`](https://github.com/thirdweb-dev/js/commit/6a4aab0b8a2e0f6ff1b47992a3c1e5426a74f7ff), [`6a4aab0b`](https://github.com/thirdweb-dev/js/commit/6a4aab0b8a2e0f6ff1b47992a3c1e5426a74f7ff)]:
  - @thirdweb-dev/sdk@3.10.14
  - @thirdweb-dev/wallets@0.2.19
  - @thirdweb-dev/chains@0.1.15

## 3.11.10

### Patch Changes

- [#954](https://github.com/thirdweb-dev/js/pull/954) [`5305b42d`](https://github.com/thirdweb-dev/js/commit/5305b42db554b69f903b3d95f3ba0eeddabd6114) Thanks [@jarrodwatts](https://github.com/jarrodwatts)! - useContract now types correctly for thirdweb generate

- [#966](https://github.com/thirdweb-dev/js/pull/966) [`87021cee`](https://github.com/thirdweb-dev/js/commit/87021cee45e81a6504e4e2279e6d2abb10cab8ec) Thanks [@MananTank](https://github.com/MananTank)! - Connect Wallet UI improvements

  - Allow from EOA => smart wallet / safe
  - Add warning to backup wallet for guest wallet
  - Show "Guest" instead of address for guest wallet

- [#977](https://github.com/thirdweb-dev/js/pull/977) [`93bd5733`](https://github.com/thirdweb-dev/js/commit/93bd57337b7d2c2fcd252987d10df3206c839daf) Thanks [@MananTank](https://github.com/MananTank)! - Fix Connect Wallet Open/Close issues

- Updated dependencies [[`93bdec06`](https://github.com/thirdweb-dev/js/commit/93bdec061dc05ab133e79f5f739dcae9b5393f53), [`ea0f9479`](https://github.com/thirdweb-dev/js/commit/ea0f9479a38d442201e367fce1234c130228fde6), [`05ebbc15`](https://github.com/thirdweb-dev/js/commit/05ebbc15a012855735fba2aa93887b88e14295d1), [`5305b42d`](https://github.com/thirdweb-dev/js/commit/5305b42db554b69f903b3d95f3ba0eeddabd6114), [`4ca557ae`](https://github.com/thirdweb-dev/js/commit/4ca557ae4ab225e39decc3b7a01a04c0d8e464c7), [`7d7685e3`](https://github.com/thirdweb-dev/js/commit/7d7685e3fab5780b3c1d26b8ef431b96f8486972), [`eb521d24`](https://github.com/thirdweb-dev/js/commit/eb521d240ae7102d44fe2c5223b0a18d867e09ad), [`af4b5356`](https://github.com/thirdweb-dev/js/commit/af4b5356372ffa084c8d0e747d8def46c2ff892c), [`93bd5733`](https://github.com/thirdweb-dev/js/commit/93bd57337b7d2c2fcd252987d10df3206c839daf), [`a2df187b`](https://github.com/thirdweb-dev/js/commit/a2df187bc1867beb2e90853da70dac271f604f12), [`aa9b6acc`](https://github.com/thirdweb-dev/js/commit/aa9b6acc3f5a118c2b5fe9e46732e72c0fc69376)]:
  - @thirdweb-dev/wallets@0.2.18
  - @thirdweb-dev/chains@0.1.14
  - @thirdweb-dev/sdk@3.10.13

## 3.11.9

### Patch Changes

- [#937](https://github.com/thirdweb-dev/js/pull/937) [`7012513b`](https://github.com/thirdweb-dev/js/commit/7012513bc20f283b2cde46c0b938af33fe3a1a20) Thanks [@iketw](https://github.com/iketw)! - [ReactNative] Adding Smart Wallet to React Native as an option in the ConnectWallet button

- [#941](https://github.com/thirdweb-dev/js/pull/941) [`5d67b280`](https://github.com/thirdweb-dev/js/commit/5d67b2807f2504add4c202d2eb18897415662fb6) Thanks [@MananTank](https://github.com/MananTank)! - Add Magic Link

- [#787](https://github.com/thirdweb-dev/js/pull/787) [`d2c7f6d7`](https://github.com/thirdweb-dev/js/commit/d2c7f6d758787fab102ecc0cec16ac74f3c87a1f) Thanks [@iketw](https://github.com/iketw)! - [ReactNative] Adds Device Wallet

- [#955](https://github.com/thirdweb-dev/js/pull/955) [`c7c2530c`](https://github.com/thirdweb-dev/js/commit/c7c2530c7f2ef412f1e40428391e85decf504392) Thanks [@MananTank](https://github.com/MananTank)! - Local wallet UI refactor and other fixes

- [#927](https://github.com/thirdweb-dev/js/pull/927) [`1e9fad77`](https://github.com/thirdweb-dev/js/commit/1e9fad779f3ebe535d32c0ce76905a3a8033f2fa) Thanks [@MananTank](https://github.com/MananTank)! - safe, deviceWallet and smartWallet autoconnect

- Updated dependencies [[`7012513b`](https://github.com/thirdweb-dev/js/commit/7012513bc20f283b2cde46c0b938af33fe3a1a20), [`5d67b280`](https://github.com/thirdweb-dev/js/commit/5d67b2807f2504add4c202d2eb18897415662fb6), [`f12a80a4`](https://github.com/thirdweb-dev/js/commit/f12a80a4758aa91c43084acedb212de9f36a7371), [`5a67d5d8`](https://github.com/thirdweb-dev/js/commit/5a67d5d89474eac9a638ffaddba139b62965deff), [`d2c7f6d7`](https://github.com/thirdweb-dev/js/commit/d2c7f6d758787fab102ecc0cec16ac74f3c87a1f), [`c7c2530c`](https://github.com/thirdweb-dev/js/commit/c7c2530c7f2ef412f1e40428391e85decf504392), [`f12a80a4`](https://github.com/thirdweb-dev/js/commit/f12a80a4758aa91c43084acedb212de9f36a7371), [`bf6df267`](https://github.com/thirdweb-dev/js/commit/bf6df2671131d7ed38650e2bed806081b32dc244), [`e22e4a47`](https://github.com/thirdweb-dev/js/commit/e22e4a47d73e1bbc6e3f0ae7ed56717b44e5ffcd), [`1e4ac672`](https://github.com/thirdweb-dev/js/commit/1e4ac672720c2fb01046bec195877a074ffbda06), [`fc96e147`](https://github.com/thirdweb-dev/js/commit/fc96e14750175b19cb66fa7d50cdbad65b42153a), [`4a69f8c8`](https://github.com/thirdweb-dev/js/commit/4a69f8c85dec420615e9eda8d1ad5b5ef0b87713), [`26cd91ff`](https://github.com/thirdweb-dev/js/commit/26cd91ffe18dad37133a18988f21185c13d64cfb), [`8f962bc1`](https://github.com/thirdweb-dev/js/commit/8f962bc15c35da52ed5bc4025bb4cd18b69079e3), [`28b5d1eb`](https://github.com/thirdweb-dev/js/commit/28b5d1eb6d0142d3ebefb8bd078c30949f77fe61), [`0186721b`](https://github.com/thirdweb-dev/js/commit/0186721bc455aa1f8454839a1a25fa4062b45102), [`0bf29745`](https://github.com/thirdweb-dev/js/commit/0bf29745b0e842763c271ad8773312f0836ea00f), [`f0279c22`](https://github.com/thirdweb-dev/js/commit/f0279c228829b86ff1f828219bcef4fe16901f67), [`1e9fad77`](https://github.com/thirdweb-dev/js/commit/1e9fad779f3ebe535d32c0ce76905a3a8033f2fa), [`7af99d9a`](https://github.com/thirdweb-dev/js/commit/7af99d9a6d54492a29a90288a25b30773a8a10a7), [`00d0d01e`](https://github.com/thirdweb-dev/js/commit/00d0d01e619ff5c60b9f31386f51a55b5e466efa), [`fc96e147`](https://github.com/thirdweb-dev/js/commit/fc96e14750175b19cb66fa7d50cdbad65b42153a), [`8cfb4f38`](https://github.com/thirdweb-dev/js/commit/8cfb4f38ed89c26ad04f19d27c65c24cefa976b6)]:
  - @thirdweb-dev/wallets@0.2.17
  - @thirdweb-dev/chains@0.1.13
  - @thirdweb-dev/sdk@3.10.12
  - @thirdweb-dev/storage@1.1.2

## 3.11.8

### Patch Changes

- [#874](https://github.com/thirdweb-dev/js/pull/874) [`49922de9`](https://github.com/thirdweb-dev/js/commit/49922de9d9c1258e58a3a05e656b229db469b1dd) Thanks [@iketw](https://github.com/iketw)! - [RN] Adds Auth to React Native

  - Adds an optional `secureStorage` to authConfig
  - Adds `expo-secure-store` to store the JWT token securely in React Native, passing a default value
  - Stores the token in secure storage to be accessed by subsequent calls
  - Returns the token in `useLogin` to be used by the user

  How I tested:

  - Tested in Android/iOS/Web

  Usage:

  ```
  <ThirdwebProvider
        activeChain="ethereum"
        supportedWallets={[metamaskWallet(), rainbowWallet()]}
        authConfig={{
          domain: https://your-domain.com,
          authUrl: '/api/auth',
        }}>
        <AppInner />
      </ThirdwebProvider>
  ```

  ```
  const { login } = useLogin();
  const { logout } = useLogout();
  const { user, isLoggedIn } = useUser();
  ...

  const token = await login();
  ```

- [#892](https://github.com/thirdweb-dev/js/pull/892) [`4acb2b55`](https://github.com/thirdweb-dev/js/commit/4acb2b5561118dde5c7372400d4d754b879aef2e) Thanks [@MananTank](https://github.com/MananTank)! - Add Switch Account button for MetaMask

- [#896](https://github.com/thirdweb-dev/js/pull/896) [`a6610f12`](https://github.com/thirdweb-dev/js/commit/a6610f1211e9359885b948bf69a66d834707ec07) Thanks [@atharvadeosthale](https://github.com/atharvadeosthale)! - Added links to portal

- [#895](https://github.com/thirdweb-dev/js/pull/895) [`06cc1df3`](https://github.com/thirdweb-dev/js/commit/06cc1df3b7906584c9e2e69fddc4a2d831c237f9) Thanks [@MananTank](https://github.com/MananTank)! - Fix supportedChains not having the activeChain for wallets

- [#887](https://github.com/thirdweb-dev/js/pull/887) [`430a5f79`](https://github.com/thirdweb-dev/js/commit/430a5f793419173775a434e0b2a21f70223e3813) Thanks [@MananTank](https://github.com/MananTank)! - export Configurable NetworkSelector

- [#922](https://github.com/thirdweb-dev/js/pull/922) [`477324ec`](https://github.com/thirdweb-dev/js/commit/477324ec85b800dcbc54b709430c77fb63b16537) Thanks [@adam-maj](https://github.com/adam-maj)! - Add useAuth back to react-core

- Updated dependencies [[`abe88599`](https://github.com/thirdweb-dev/js/commit/abe88599b634699aa3b876fe344bfddc6c1a92d4), [`4acb2b55`](https://github.com/thirdweb-dev/js/commit/4acb2b5561118dde5c7372400d4d754b879aef2e), [`82bea3fa`](https://github.com/thirdweb-dev/js/commit/82bea3fa10294eb3c5c7327fb047e3d1b2c62ff9), [`ea04edf4`](https://github.com/thirdweb-dev/js/commit/ea04edf47867617ff74f0aca1471a40b8d9c9f7c), [`77224646`](https://github.com/thirdweb-dev/js/commit/77224646d542db3171394d744b455497cd057633), [`c9ee9b32`](https://github.com/thirdweb-dev/js/commit/c9ee9b32f0a275f7c03d50243f23a7332f148ae5), [`00f4355f`](https://github.com/thirdweb-dev/js/commit/00f4355f1aa8843bb534b173e4d8e0a19dd18b47), [`a6610f12`](https://github.com/thirdweb-dev/js/commit/a6610f1211e9359885b948bf69a66d834707ec07), [`29146e00`](https://github.com/thirdweb-dev/js/commit/29146e009db655304f5753904ae7f8569c12f4ca), [`77224646`](https://github.com/thirdweb-dev/js/commit/77224646d542db3171394d744b455497cd057633), [`664d1cd0`](https://github.com/thirdweb-dev/js/commit/664d1cd0dd03f32337c2cf532f0ad860e5aa5ea8), [`bfdd8493`](https://github.com/thirdweb-dev/js/commit/bfdd84939d7cf9c6635b83c971bcc8967b52538c), [`c2fec930`](https://github.com/thirdweb-dev/js/commit/c2fec930520e2df89532ec0027ead4563c7708cf)]:
  - @thirdweb-dev/sdk@3.10.11
  - @thirdweb-dev/wallets@0.2.16
  - @thirdweb-dev/chains@0.1.12

## 3.11.7

### Patch Changes

- [#876](https://github.com/thirdweb-dev/js/pull/876) [`0db0cc75`](https://github.com/thirdweb-dev/js/commit/0db0cc756436dba8f9df0cf8678b87c009acc283) Thanks [@nachoiacovino](https://github.com/nachoiacovino)! - Fix useContractEvents cache not storing individual events

- Updated dependencies [[`ac8fa0b3`](https://github.com/thirdweb-dev/js/commit/ac8fa0b34545a2bc0b489a0551d476a9f560e851), [`b616dca7`](https://github.com/thirdweb-dev/js/commit/b616dca7eb861cd1d2adba3f3d1fe9c3b50f259e), [`2545a440`](https://github.com/thirdweb-dev/js/commit/2545a440dc272690cacbc23023f7b0a68f390c6e), [`b75bcef5`](https://github.com/thirdweb-dev/js/commit/b75bcef55bfdedc260b5b62bb4aff10a7d5c47b6), [`229a4741`](https://github.com/thirdweb-dev/js/commit/229a47413e422952ad946b8c09af32cc1fcdc7f0), [`c9027fce`](https://github.com/thirdweb-dev/js/commit/c9027fced0fffbf757bf0080bc4a49f5464df647)]:
  - @thirdweb-dev/sdk@3.10.10
  - @thirdweb-dev/wallets@0.2.15

## 3.11.6

### Patch Changes

- Updated dependencies [[`b3d57949`](https://github.com/thirdweb-dev/js/commit/b3d57949bd047831fda7e600b4872200340903b5), [`602d8cbc`](https://github.com/thirdweb-dev/js/commit/602d8cbcfaa7c1e117c01f842f89508f7333fcfe)]:
  - @thirdweb-dev/sdk@3.10.9

## 3.11.5

### Patch Changes

- [#870](https://github.com/thirdweb-dev/js/pull/870) [`235eb046`](https://github.com/thirdweb-dev/js/commit/235eb0460ae0638f63acf82957bcfea41b9e955d) Thanks [@jnsdls](https://github.com/jnsdls)! - fix crash during SSR when "window" is undefined

- [#862](https://github.com/thirdweb-dev/js/pull/862) [`b5648aee`](https://github.com/thirdweb-dev/js/commit/b5648aee83b299d07a8eed7773bd32bcceef9657) Thanks [@nachoiacovino](https://github.com/nachoiacovino)! - Make tokenId optional one useNFTBalance

- Updated dependencies [[`1547d76c`](https://github.com/thirdweb-dev/js/commit/1547d76cce52265076c347599014f578c1de6152), [`235eb046`](https://github.com/thirdweb-dev/js/commit/235eb0460ae0638f63acf82957bcfea41b9e955d), [`1b8f812f`](https://github.com/thirdweb-dev/js/commit/1b8f812fb8c910d91fb7535d6446a0b6fc6b2310), [`235eb046`](https://github.com/thirdweb-dev/js/commit/235eb0460ae0638f63acf82957bcfea41b9e955d)]:
  - @thirdweb-dev/sdk@3.10.8
  - @thirdweb-dev/wallets@0.2.14
  - @thirdweb-dev/chains@0.1.11

## 3.11.4

### Patch Changes

- [#851](https://github.com/thirdweb-dev/js/pull/851) [`c5c2d947`](https://github.com/thirdweb-dev/js/commit/c5c2d9478acd4d4a4e6ce814716bdf1b6e51eafc) Thanks [@MananTank](https://github.com/MananTank)! - Fix wallet autoconnect issues

  ### Fixes

  - infinite loading spinner on connect wallet button when wallet is locked or connection to app is closed
  - network switch popup on page load when wallet is connected to different network than it was previously connected
  - removed autoconnect timeout - don't need it anymore

- [#855](https://github.com/thirdweb-dev/js/pull/855) [`2dd192a5`](https://github.com/thirdweb-dev/js/commit/2dd192a5676f1b6d3c310ec796bf331252098d48) Thanks [@MananTank](https://github.com/MananTank)! - Add auth in Connect Wallet button

- Updated dependencies [[`c5c2d947`](https://github.com/thirdweb-dev/js/commit/c5c2d9478acd4d4a4e6ce814716bdf1b6e51eafc), [`2dd192a5`](https://github.com/thirdweb-dev/js/commit/2dd192a5676f1b6d3c310ec796bf331252098d48)]:
  - @thirdweb-dev/wallets@0.2.13
  - @thirdweb-dev/sdk@3.10.7

## 3.11.3

### Patch Changes

- [#848](https://github.com/thirdweb-dev/js/pull/848) [`1137a20d`](https://github.com/thirdweb-dev/js/commit/1137a20de44603d35e71eae2f2b6fec79febec00) Thanks [@jnsdls](https://github.com/jnsdls)! - bugfix: `useContractWrite` now accepts overrides again.

- Updated dependencies [[`1137a20d`](https://github.com/thirdweb-dev/js/commit/1137a20de44603d35e71eae2f2b6fec79febec00)]:
  - @thirdweb-dev/chains@0.1.10
  - @thirdweb-dev/sdk@3.10.7
  - @thirdweb-dev/wallets@0.2.12

## 3.11.2

### Patch Changes

- [#834](https://github.com/thirdweb-dev/js/pull/834) [`b7fcae6e`](https://github.com/thirdweb-dev/js/commit/b7fcae6e40dade7a239b1a6afb1cd996c8f89910) Thanks [@adam-maj](https://github.com/adam-maj)! - Usage of the `useContractRead` and `useContractWrite` hooks has changed:

  ```js
  const owner = "0x...";
  const operator = "0x...";
  const overrides = { gasLimit: "10000", gasPrice: "10000" };

  // Old usage
  const { data } = useContractRead(
    contract,
    "approve",
    owner,
    operator,
    overrides,
  );

  const { mutateAsync } = useContractWrite(contract, "approve");
  mutateAsync(owner, operator, overrides);

  // New usage
  const { data } = useContractRead(
    contract,
    "approve",
    [owner, operator],
    overrides,
  );

  const { mutateAsync } = useContractWrite(contract, "approve");
  mutateAsync([owner, operator], overrides);
  ```

- [#841](https://github.com/thirdweb-dev/js/pull/841) [`1f2df55b`](https://github.com/thirdweb-dev/js/commit/1f2df55b673fefb0106778dca7a13406cfbcfc90) Thanks [@MananTank](https://github.com/MananTank)! - add useNetwork() hook back

- [#843](https://github.com/thirdweb-dev/js/pull/843) [`839fce1f`](https://github.com/thirdweb-dev/js/commit/839fce1f6f2747d6102033b26c292294e908f75d) Thanks [@jnsdls](https://github.com/jnsdls)! - fix solana program query key resolution

- Updated dependencies [[`b7fcae6e`](https://github.com/thirdweb-dev/js/commit/b7fcae6e40dade7a239b1a6afb1cd996c8f89910), [`839fce1f`](https://github.com/thirdweb-dev/js/commit/839fce1f6f2747d6102033b26c292294e908f75d), [`839fce1f`](https://github.com/thirdweb-dev/js/commit/839fce1f6f2747d6102033b26c292294e908f75d)]:
  - @thirdweb-dev/sdk@3.10.6
  - @thirdweb-dev/chains@0.1.9
  - @thirdweb-dev/storage@1.1.2
  - @thirdweb-dev/wallets@0.2.11

## 3.11.1

### Patch Changes

- [#837](https://github.com/thirdweb-dev/js/pull/837) [`e2581f21`](https://github.com/thirdweb-dev/js/commit/e2581f211e4419105d6169d84a60a4d69759eda9) Thanks [@lucoadam](https://github.com/lucoadam)! - Fixes auth logout by invalidating cookie by storing updated cookie credential

- Updated dependencies [[`9b303829`](https://github.com/thirdweb-dev/js/commit/9b3038291d1c9f4eb243718a6070e3dac829a354)]:
  - @thirdweb-dev/chains@0.1.8
  - @thirdweb-dev/sdk@3.10.5
  - @thirdweb-dev/wallets@0.2.10

## 3.11.0

### Minor Changes

- [#584](https://github.com/thirdweb-dev/js/pull/584) [`d01b135d`](https://github.com/thirdweb-dev/js/commit/d01b135d26efe6cebd84110b1a8eacee5c1b98db) Thanks [@MananTank](https://github.com/MananTank)! - [Wallets, RN, React, ReactCore] New Wallets SDK implementation

  #### Breaking changes:

  ### React and React Native

  1. Replaced `walletConnectors` with `supportedWallets` in the ThirdwebProvider.

  ```diff
    import { coinbaseWallet, metamaskWallet, ThirdwebProvider } from "@thirdweb-dev/react";

    const App = () => {
    - return <ThirdwebProvider walletConnectors={["metamask", "coinbaseWallet"]}>{...}</ThirdwebProvider>
    + return <ThirdwebProvider supportedWallets={[metamaskWallet(), coinbaseWallet()]}>{...}</ThirdwebProvider>
    }
  ```

  2. `magicLinkConnector` not yet implemented in this version

  3. Removed `desiredChainId`, use `activeChain` instead

  4. `DAppMetaData` type now requires the `url` field to be passed in

  5. Removed `chainRpc` prop from the ThirdwebProvider. You can pass custom rpcs in the Chain object through the `activeChain` and `supportedChains` props.

  6. Replaced the `useNetwork` hook for `useChain` and `useSwitchChain`

  7. Updated `ConnectWallet` button in React:

  - Removed `accentColor` and `colorMode`
  - Added a `theme` prop with `dark` and `light` values

  8. Updated the `Web3Button` button in React:

  - Removed `accentColor` and `colorMode`
  - Added a `theme` prop with `dark` and `light` values

  ### Patch Changes

  - You can now pass a `theme` prop to the ThirdwebProvider. Values are `light` and `dark`

  ```
    import { ThirdwebProvider } from "@thirdweb-dev/react";

    const App = () => {
    return <ThirdwebProvider theme='light'>{...}</ThirdwebProvider>
    }
  ```

  - New wallet hooks added

    - useWallet()
    - useConenct()
    - useConnectionStatus()
    - useSwitchChain()

  - Removed `wagmi` dependency from the `react-native-compat` package and updated shims

  - New `ConnectWallet` and `Web3Button` components in React Native

  - New wallets package with support for the most common wallets. MetaMask, Coinbase, WalletConnect V1 and V2 and PaperWallet

  - Added `autoSwitch` prop to the ThirdwebProvider to control whether or not to automatically switch to wallet's network to active chain

  ```
    import { ThirdwebProvider } from "@thirdweb-dev/react";

    const App = () => {
    return <ThirdwebProvider autoSwitch>{...}</ThirdwebProvider>
    }
  ```

- [#739](https://github.com/thirdweb-dev/js/pull/739) [`4d5fdda9`](https://github.com/thirdweb-dev/js/commit/4d5fdda907af0451507d5e2812ec91fbd513a11c) Thanks [@jnsdls](https://github.com/jnsdls)! - remove `Gnosis Safe` and `Magic Link` connectors -> they can now be found in `@thirdweb-dev/wallets` instead.

### Patch Changes

- [#794](https://github.com/thirdweb-dev/js/pull/794) [`a6fce0f6`](https://github.com/thirdweb-dev/js/commit/a6fce0f691ffeb2b7ec1355b1c55fa7e58700406) Thanks [@shift4id](https://github.com/shift4id)! - Minor copy changes

- [#757](https://github.com/thirdweb-dev/js/pull/757) [`9ea43969`](https://github.com/thirdweb-dev/js/commit/9ea439692da94f84297bf6a9d04487a1cb74796d) Thanks [@iketw](https://github.com/iketw)! - switch to `thirdwebcdn.com` for default IPFS gateway

- [#829](https://github.com/thirdweb-dev/js/pull/829) [`3ff8eecf`](https://github.com/thirdweb-dev/js/commit/3ff8eecf18b9606f6b4f2164745448b7f2031fb3) Thanks [@MananTank](https://github.com/MananTank)! - use `authConfig` provided in `useLogin()` hook

- [#825](https://github.com/thirdweb-dev/js/pull/825) [`4bdeefe6`](https://github.com/thirdweb-dev/js/commit/4bdeefe6cb343a979b336dcd99197d895c2ae1fb) Thanks [@iketw](https://github.com/iketw)! - [Core,React,RN,Wallets] Allow for wallets to be created without props where possible

  You can now create wallets without having to worry about it's params. We provide sensible defaults.

  ```
  const w = new WalletConnectV1();
    w.connect();

  const w1 = new WalletConnect();
  w1.connect();

  const cb = new CoinbaseWallet()
  w1.connect();

  const safe = new SafeWallet();

  const device = new DeviceBrowserWallet();
  ```

- [#800](https://github.com/thirdweb-dev/js/pull/800) [`d6ae520a`](https://github.com/thirdweb-dev/js/commit/d6ae520aaf272bdd9d235858701ea67c2c1fd796) Thanks [@iketw](https://github.com/iketw)! - [ReactCore/RN] Fix useActiveChain hook

- [#681](https://github.com/thirdweb-dev/js/pull/681) [`5f0493d0`](https://github.com/thirdweb-dev/js/commit/5f0493d0fb291b4072cc433412883d352588c397) Thanks [@adam-maj](https://github.com/adam-maj)! - Add support for ENS

- [#702](https://github.com/thirdweb-dev/js/pull/702) [`33d1cc7f`](https://github.com/thirdweb-dev/js/commit/33d1cc7f92cd982e9e55130472c0006bb999f682) Thanks [@jnsdls](https://github.com/jnsdls)! - enable `browser` export

- [#824](https://github.com/thirdweb-dev/js/pull/824) [`95bcfa6d`](https://github.com/thirdweb-dev/js/commit/95bcfa6df84c48cb5d590f47489f275d22bd660a) Thanks [@iketw](https://github.com/iketw)! - [Wallets] Add autoconnect capabilities

  - You can now call `.autoConnect` on your wallets and it will check if the wallet is connected. If it's not, it will not trigger the connect flow

- [#819](https://github.com/thirdweb-dev/js/pull/819) [`682f1c67`](https://github.com/thirdweb-dev/js/commit/682f1c673f4b02acab3986031942dbd3d67a87fa) Thanks [@adam-maj](https://github.com/adam-maj)! - Update contract.call to have function types

- [#802](https://github.com/thirdweb-dev/js/pull/802) [`4d07b4b4`](https://github.com/thirdweb-dev/js/commit/4d07b4b4e7bdc6244d399f287611fd5eb5d39cac) Thanks [@iketw](https://github.com/iketw)! - [ReactCore/Wallets] ReactCore manages all coordination for wallet reconnection

- [#735](https://github.com/thirdweb-dev/js/pull/735) [`ba9f593b`](https://github.com/thirdweb-dev/js/commit/ba9f593be8e10289040b466bdcf98ff251f412a3) Thanks [@jnsdls](https://github.com/jnsdls)! - <br />

  ### New Hooks

  <details>
  <summary>
  <code>useWatchTransactions()</code> - watch for transactions on the blockchain (real-time)
  </summary>
  <br />

  **Example:** Listen to all transactions on USD Coin (USDC) contract address.

  ```jsx
  import { useWatchTransactions } from "@thirdweb-dev/react";

  const MyComponent = () => {
    const transactions = useWatchTransactions({
      network: "ethereum",
      contractAddress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
    });

    if (!transactions.length) {
      return <div>No transactions, yet.</div>;
    }

    return (
      <div>
        {transactions.map((transaction) => (
          <div key={transaction.hash}>
            <div>Hash: {transaction.hash}</div>
            <div>From: {transaction.from}</div>
            <div>To: {transaction.to}</div>
            <div>Value: {transaction.value}</div>
          </div>
        ))}
      </div>
    );
  };
  ```

  > **Note**
  >
  > This hook is available in `@thirdweb-dev/react`, `@thirdweb-dev/react-native` and `@thirdweb-dev/react-core` packages, the usage is the same. (The only difference is the import path.)

  </details>

- [#717](https://github.com/thirdweb-dev/js/pull/717) [`04775954`](https://github.com/thirdweb-dev/js/commit/04775954a0af787313ed667cc5ef5d2212e1df36) Thanks [@nachoiacovino](https://github.com/nachoiacovino)! - Make tokenId optional on useTotalCirculatingSupply

- [#764](https://github.com/thirdweb-dev/js/pull/764) [`4b77bc9b`](https://github.com/thirdweb-dev/js/commit/4b77bc9b88a218647e6c32c7002880f07347f32a) Thanks [@MananTank](https://github.com/MananTank)! - paper wallet, do not save device wallet password

- [#832](https://github.com/thirdweb-dev/js/pull/832) [`e47ceafe`](https://github.com/thirdweb-dev/js/commit/e47ceafeae950c22860ca4c7dffba7d573e04a94) Thanks [@MananTank](https://github.com/MananTank)! - - Fix `wallet.addListener` "connect", "disconnect" event emit issue

  - update the paper sdk

- [#786](https://github.com/thirdweb-dev/js/pull/786) [`ddc1c33a`](https://github.com/thirdweb-dev/js/commit/ddc1c33a531dd063158ec736f43dd65b423c21e8) Thanks [@MananTank](https://github.com/MananTank)! - Gnosis Safe

- [#799](https://github.com/thirdweb-dev/js/pull/799) [`49eceaa0`](https://github.com/thirdweb-dev/js/commit/49eceaa08e642a72bb6e21d7b68a1177ae37aec5) Thanks [@iketw](https://github.com/iketw)! - [ReactCore] Stop typescript from warning about chains not in our defaults

- [#748](https://github.com/thirdweb-dev/js/pull/748) [`2221f97d`](https://github.com/thirdweb-dev/js/commit/2221f97ddc997d864db3a5f00e82862ece574922) Thanks [@MananTank](https://github.com/MananTank)! - [ReactCore] Inject api key to chains

- [#767](https://github.com/thirdweb-dev/js/pull/767) [`9fa628f8`](https://github.com/thirdweb-dev/js/commit/9fa628f89492633e4f7ea2b7c542e1587ea17a86) Thanks [@adam-maj](https://github.com/adam-maj)! - Make generate work with useContract

- [#712](https://github.com/thirdweb-dev/js/pull/712) [`bd40bc2e`](https://github.com/thirdweb-dev/js/commit/bd40bc2ef1e90490400a5f03fdfd178578844244) Thanks [@atharvadeosthale](https://github.com/atharvadeosthale)! - Updated params for claiming hooks to reflect the correct type of contract that can be used

- Updated dependencies [[`d01b135d`](https://github.com/thirdweb-dev/js/commit/d01b135d26efe6cebd84110b1a8eacee5c1b98db), [`6e9b9dba`](https://github.com/thirdweb-dev/js/commit/6e9b9dba1dfb9e828e6927f441e7223baa5bcc76), [`93eca1de`](https://github.com/thirdweb-dev/js/commit/93eca1de7d23d66a129418aee72a41e394cbec16), [`a6fce0f6`](https://github.com/thirdweb-dev/js/commit/a6fce0f691ffeb2b7ec1355b1c55fa7e58700406), [`9ea43969`](https://github.com/thirdweb-dev/js/commit/9ea439692da94f84297bf6a9d04487a1cb74796d), [`2ec28021`](https://github.com/thirdweb-dev/js/commit/2ec2802119a3c375a1adaed1263ae1eae1384865), [`4bdeefe6`](https://github.com/thirdweb-dev/js/commit/4bdeefe6cb343a979b336dcd99197d895c2ae1fb), [`805896c7`](https://github.com/thirdweb-dev/js/commit/805896c78d5ecbbe1866408fbb73d060f7404146), [`b56511e2`](https://github.com/thirdweb-dev/js/commit/b56511e22d5eb2adf306d5675f1e52ff97a64f3a), [`8ef5a6f2`](https://github.com/thirdweb-dev/js/commit/8ef5a6f21735e6ac235937f6c34495a74c9da364), [`4cbbad98`](https://github.com/thirdweb-dev/js/commit/4cbbad98b303d872c09efedbece179445c7adc9c), [`e3161e59`](https://github.com/thirdweb-dev/js/commit/e3161e5986e1831c6dae517889b6a6ba181ccd36), [`5f0493d0`](https://github.com/thirdweb-dev/js/commit/5f0493d0fb291b4072cc433412883d352588c397), [`71532e5a`](https://github.com/thirdweb-dev/js/commit/71532e5a9fb5b116ba342465ef82e795ca8cc011), [`33d1cc7f`](https://github.com/thirdweb-dev/js/commit/33d1cc7f92cd982e9e55130472c0006bb999f682), [`de7b6196`](https://github.com/thirdweb-dev/js/commit/de7b6196766d709deeac148a24dd8dd38b3e924a), [`6b145d4b`](https://github.com/thirdweb-dev/js/commit/6b145d4b36d2706f8a2dcad4b8f680c41606a556), [`83e99dbf`](https://github.com/thirdweb-dev/js/commit/83e99dbf289c7b8b8991c58383f8bc2a63f5a702), [`1baed0b1`](https://github.com/thirdweb-dev/js/commit/1baed0b1d83b4c92dac44430af5436d04727d92f), [`52d37f01`](https://github.com/thirdweb-dev/js/commit/52d37f01873c649b36c7d77df6c525a666245132), [`485abd06`](https://github.com/thirdweb-dev/js/commit/485abd06aa972a4f43f71b98f9666f113b932fb3), [`95bcfa6d`](https://github.com/thirdweb-dev/js/commit/95bcfa6df84c48cb5d590f47489f275d22bd660a), [`682f1c67`](https://github.com/thirdweb-dev/js/commit/682f1c673f4b02acab3986031942dbd3d67a87fa), [`4d07b4b4`](https://github.com/thirdweb-dev/js/commit/4d07b4b4e7bdc6244d399f287611fd5eb5d39cac), [`4d5fdda9`](https://github.com/thirdweb-dev/js/commit/4d5fdda907af0451507d5e2812ec91fbd513a11c), [`d8c1c943`](https://github.com/thirdweb-dev/js/commit/d8c1c9433e8dc48a70a1c93a0c1467c12ad79701), [`08507611`](https://github.com/thirdweb-dev/js/commit/085076117b18a615aa2b1b8f086d434cab3a4e4e), [`e2ec70c4`](https://github.com/thirdweb-dev/js/commit/e2ec70c49264737fbd2afb1cacabded82262bc6c), [`6b31a9bc`](https://github.com/thirdweb-dev/js/commit/6b31a9bcd3898cf56ee3b774a44b7481738c8e60), [`4b77bc9b`](https://github.com/thirdweb-dev/js/commit/4b77bc9b88a218647e6c32c7002880f07347f32a), [`d01b135d`](https://github.com/thirdweb-dev/js/commit/d01b135d26efe6cebd84110b1a8eacee5c1b98db), [`1baed0b1`](https://github.com/thirdweb-dev/js/commit/1baed0b1d83b4c92dac44430af5436d04727d92f), [`8463a176`](https://github.com/thirdweb-dev/js/commit/8463a1761ff4741b55a72e6994a29f7dd50b54e1), [`e47ceafe`](https://github.com/thirdweb-dev/js/commit/e47ceafeae950c22860ca4c7dffba7d573e04a94), [`6c0c6538`](https://github.com/thirdweb-dev/js/commit/6c0c65389fb5b990a6e780e7d3f7dbd403fe950d), [`208d97e6`](https://github.com/thirdweb-dev/js/commit/208d97e6a892942171c056768876b3e33399d275), [`ddc1c33a`](https://github.com/thirdweb-dev/js/commit/ddc1c33a531dd063158ec736f43dd65b423c21e8), [`5c7c0923`](https://github.com/thirdweb-dev/js/commit/5c7c0923e45b3f0ee27c83a9c4c691ce9bbb8539), [`ba9f593b`](https://github.com/thirdweb-dev/js/commit/ba9f593be8e10289040b466bdcf98ff251f412a3), [`2221f97d`](https://github.com/thirdweb-dev/js/commit/2221f97ddc997d864db3a5f00e82862ece574922), [`9fa628f8`](https://github.com/thirdweb-dev/js/commit/9fa628f89492633e4f7ea2b7c542e1587ea17a86), [`5c7c0923`](https://github.com/thirdweb-dev/js/commit/5c7c0923e45b3f0ee27c83a9c4c691ce9bbb8539), [`abf609a4`](https://github.com/thirdweb-dev/js/commit/abf609a40114a509fe07a04bfb0793dc44c9e39d), [`9a4a542c`](https://github.com/thirdweb-dev/js/commit/9a4a542ce9650605d48745a40126ca6b52a16722), [`b2d0ffb0`](https://github.com/thirdweb-dev/js/commit/b2d0ffb049208de9f9212eae7059212aed74fec4)]:
  - @thirdweb-dev/wallets@0.2.9
  - @thirdweb-dev/chains@0.1.7
  - @thirdweb-dev/sdk@3.10.4
  - @thirdweb-dev/storage@1.1.1

## 3.10.3

## 3.10.2

## 3.10.1

### Patch Changes

- [#684](https://github.com/thirdweb-dev/js/pull/684) [`9efeba38`](https://github.com/thirdweb-dev/js/commit/9efeba38f06783b78e2c947ad878350173f4e07a) Thanks [@adam-maj](https://github.com/adam-maj)! - Update auth hooks to include credentials on login

## 3.10.0

### Patch Changes

- [#670](https://github.com/thirdweb-dev/js/pull/670) [`6ae39277`](https://github.com/thirdweb-dev/js/commit/6ae39277a1d2ea507cedcde7ae62439758e4d6e0) Thanks [@jnsdls](https://github.com/jnsdls)! - improve signer resilience

- [#668](https://github.com/thirdweb-dev/js/pull/668) [`8f46a2ee`](https://github.com/thirdweb-dev/js/commit/8f46a2eef59d2b21b68e38338ed2b3a820421501) Thanks [@jnsdls](https://github.com/jnsdls)! - FIX signer being updated

- [#650](https://github.com/thirdweb-dev/js/pull/650) [`8d5b418e`](https://github.com/thirdweb-dev/js/commit/8d5b418e78fcf692f72aed5fe49358e40720d80c) Thanks [@nachoiacovino](https://github.com/nachoiacovino)! - Fix invariant for appURI hooks

- [#665](https://github.com/thirdweb-dev/js/pull/665) [`6ef52dc9`](https://github.com/thirdweb-dev/js/commit/6ef52dc916251d72416ba5a8b63b428770f54e75) Thanks [@shift4id](https://github.com/shift4id)! - Fix spelling throughout all packages

- [#672](https://github.com/thirdweb-dev/js/pull/672) [`2676fc01`](https://github.com/thirdweb-dev/js/commit/2676fc01f4d8eabc90e71fad1f14b4b29806d2bd) Thanks [@jnsdls](https://github.com/jnsdls)! - back to use-memo

- [#662](https://github.com/thirdweb-dev/js/pull/662) [`3740a0bf`](https://github.com/thirdweb-dev/js/commit/3740a0bf5db1301dbd93a97ab4c9343429a4e12d) Thanks [@furqanrydhan](https://github.com/furqanrydhan)! - switch appuri -> app

- [#626](https://github.com/thirdweb-dev/js/pull/626) [`91f5a2fd`](https://github.com/thirdweb-dev/js/commit/91f5a2fd5cb2f5aed6498defdb1feeabb283db6c) Thanks [@nachoiacovino](https://github.com/nachoiacovino)! - Improve comments and examples in the documentation

- [#625](https://github.com/thirdweb-dev/js/pull/625) [`23cd88ec`](https://github.com/thirdweb-dev/js/commit/23cd88ec3a2af86eafeac258fdc8c5b4ce3196f2) Thanks [@nachoiacovino](https://github.com/nachoiacovino)! - Add appURI get/set

- [#660](https://github.com/thirdweb-dev/js/pull/660) [`87a101ad`](https://github.com/thirdweb-dev/js/commit/87a101ad56430e793c9f22b583fea204dfed0554) Thanks [@MananTank](https://github.com/MananTank)! - Fix Wrong Currency symbol in non-default chains

- Updated dependencies [[`7832041c`](https://github.com/thirdweb-dev/js/commit/7832041c0fb25852489c73453c2b26e844d94582), [`6ef52dc9`](https://github.com/thirdweb-dev/js/commit/6ef52dc916251d72416ba5a8b63b428770f54e75), [`85250cf7`](https://github.com/thirdweb-dev/js/commit/85250cf71190092b61023d56d1e786d395a008a6), [`e33bd2a8`](https://github.com/thirdweb-dev/js/commit/e33bd2a856bbc2e2f6b0c90b46be5166281875ae), [`4355518a`](https://github.com/thirdweb-dev/js/commit/4355518afea68cd8026d3ab8a0144c15d66b9e24)]:
  - @thirdweb-dev/chains@0.1.6
  - @thirdweb-dev/auth@3.0.7

## 3.9.5

### Patch Changes

- Updated dependencies [[`d7deaa4`](https://github.com/thirdweb-dev/js/commit/d7deaa48f2f943deb8f2ad7459d17de930c00517), [`b7a5b45`](https://github.com/thirdweb-dev/js/commit/b7a5b454415596316f58a75f14472631242cc115)]:
  - @thirdweb-dev/chains@0.1.5

## 3.9.4

### Patch Changes

- Updated dependencies [[`a3472a1`](https://github.com/thirdweb-dev/js/commit/a3472a133175826d052ee986907de014e3cf3ad9), [`5712650`](https://github.com/thirdweb-dev/js/commit/5712650074e2415bbea4173a0bb68d727ff2db90)]:
  - @thirdweb-dev/chains@0.1.4

## 3.9.3

### Patch Changes

- Updated dependencies [[`3d644fb`](https://github.com/thirdweb-dev/js/commit/3d644fb8cbae8bc3ee624505831b9f5c6996898a)]:
  - @thirdweb-dev/chains@0.1.3

## 3.9.2

### Patch Changes

- [#601](https://github.com/thirdweb-dev/js/pull/601) [`66cf1fb`](https://github.com/thirdweb-dev/js/commit/66cf1fb5c2e8deb486543ee028d786bb8eef6c19) Thanks [@jnsdls](https://github.com/jnsdls)! - upgrade dependencies

- Updated dependencies [[`66cf1fb`](https://github.com/thirdweb-dev/js/commit/66cf1fb5c2e8deb486543ee028d786bb8eef6c19)]:
  - @thirdweb-dev/chains@0.1.2
  - @thirdweb-dev/auth@3.0.6

## 3.9.1

### Patch Changes

- [#588](https://github.com/thirdweb-dev/js/pull/588) [`f0de81d`](https://github.com/thirdweb-dev/js/commit/f0de81d4b1ba33b2ac73ed16cfdea8fd4eb5da9e) Thanks [@adam-maj](https://github.com/adam-maj)! - Update to use new Auth

- Updated dependencies [[`f0de81d`](https://github.com/thirdweb-dev/js/commit/f0de81d4b1ba33b2ac73ed16cfdea8fd4eb5da9e), [`f580b8a`](https://github.com/thirdweb-dev/js/commit/f580b8ac06534df24b0194cbc632b4a8fd447611)]:
  - @thirdweb-dev/auth@3.0.5
  - @thirdweb-dev/chains@0.1.1

## 3.9.0

### Patch Changes

- [#591](https://github.com/thirdweb-dev/js/pull/591) [`61d41db`](https://github.com/thirdweb-dev/js/commit/61d41db7699d999d4f71038b5376dd95e9c0d5a5) Thanks [@joaquim-verges](https://github.com/joaquim-verges)! - Fix passing activeChainId prop

- [`818048d`](https://github.com/thirdweb-dev/js/commit/818048d52fdef43536929f3b4df5b4c255b97389) Thanks [@jnsdls](https://github.com/jnsdls)! - enable passing of apiKeys to the provider

- [`2b3e94f`](https://github.com/thirdweb-dev/js/commit/2b3e94f90a49bcaccf63ac84fc9fc974506ca70d) Thanks [@joaquim-verges](https://github.com/joaquim-verges)! - Fix creating SDK with signer only

- [`500a0e6`](https://github.com/thirdweb-dev/js/commit/500a0e671b3feb01aedd2c34443b682d0934f389) Thanks [@jnsdls](https://github.com/jnsdls)! - fix deprecationWarning bug in react & react-core

- [#578](https://github.com/thirdweb-dev/js/pull/578) [`f3b96e7`](https://github.com/thirdweb-dev/js/commit/f3b96e7120ebb45f837803530962a21f87439661) Thanks [@jnsdls](https://github.com/jnsdls)! - allow `number` and `string` types for `activeChain` prop on `<ThirdwebSDKProvider />` and `<ThirdwebProvider />`

- [`5d25ee1`](https://github.com/thirdweb-dev/js/commit/5d25ee1ab7abb4bfbded283a18f2d7740bb6995d) Thanks [@jnsdls](https://github.com/jnsdls)! - fix initialization of the SDK when a `signer` is provided with a chain that is not passed in `supportedChains`

- [#576](https://github.com/thirdweb-dev/js/pull/576) [`f6ea971`](https://github.com/thirdweb-dev/js/commit/f6ea97185470f91fc73a117827df51cf8e1c99d1) Thanks [@adam-maj](https://github.com/adam-maj)! - Add support for next-auth to auth and react

- Updated dependencies [[`6a50719`](https://github.com/thirdweb-dev/js/commit/6a507194861b0712fd753c49ac63a8af68eb21d5), [`af8cf40`](https://github.com/thirdweb-dev/js/commit/af8cf40e4e1dab6afcc7622f7f9bbcfc6e8534d8), [`5d25ee1`](https://github.com/thirdweb-dev/js/commit/5d25ee1ab7abb4bfbded283a18f2d7740bb6995d), [`d0bcd2c`](https://github.com/thirdweb-dev/js/commit/d0bcd2c5871ca9480efc8d97e27e337eb9bbf830), [`4d9e5c6`](https://github.com/thirdweb-dev/js/commit/4d9e5c6193b839fc7f67e7e73e0589dc8c4db90d), [`017b0d5`](https://github.com/thirdweb-dev/js/commit/017b0d56b64651b290440b60789e058afba9f9a5), [`500a0e6`](https://github.com/thirdweb-dev/js/commit/500a0e671b3feb01aedd2c34443b682d0934f389), [`f6ea971`](https://github.com/thirdweb-dev/js/commit/f6ea97185470f91fc73a117827df51cf8e1c99d1)]:
  - @thirdweb-dev/chains@0.1.0
  - @thirdweb-dev/auth@3.0.4

## 3.8.2

## 3.8.1

## 3.8.0

### Patch Changes

- [#546](https://github.com/thirdweb-dev/js/pull/546) [`440a4ad`](https://github.com/thirdweb-dev/js/commit/440a4ade95874e696c589eaa7aae9f0fecc862be) Thanks [@nachoiacovino](https://github.com/nachoiacovino)! - Add missing marketplace v3 hooks

## 3.7.4

## 3.7.3

### Patch Changes

- Updated dependencies [[`dee4596`](https://github.com/thirdweb-dev/js/commit/dee45965496d5d0298944031dd13a4345f9e1683)]:
  - @thirdweb-dev/auth@3.0.3

## 3.7.2

### Patch Changes

- Updated dependencies []:
  - @thirdweb-dev/auth@3.0.2

## 3.7.1

### Patch Changes

- [#520](https://github.com/thirdweb-dev/js/pull/520) [`8c81ca5`](https://github.com/thirdweb-dev/js/commit/8c81ca5c3033b04b1f64e3a1134a72e7e3ec03b1) Thanks [@adam-maj](https://github.com/adam-maj)! - Update auth and react-core dependencies

- Updated dependencies [[`8c81ca5`](https://github.com/thirdweb-dev/js/commit/8c81ca5c3033b04b1f64e3a1134a72e7e3ec03b1)]:
  - @thirdweb-dev/auth@3.0.1

## 3.7.0

### Minor Changes

- [#460](https://github.com/thirdweb-dev/js/pull/460) [`a6c074c`](https://github.com/thirdweb-dev/js/commit/a6c074c3f33148cd17f5a66a58df9272a4381bab) Thanks [@adam-maj](https://github.com/adam-maj)! - All Auth hooks and configuration have been upgraded along with the major upgrade to Auth. This includes changes in necessary `authConfig` to the `ThirdwebProvider`, as well as usage of the `useLogin`, `useLogout`, and `useUser` hooks.

  ## How to Upgrade

  In order to upgrade your frontend setup to account for these changes, you'll need to make the following changes to your app:

  **1. Remove `loginRedirect` from `authConfig`**

  In your `ThirdwebProvider`, you can remove the `loginRedirect` option from the `authConfig` object, as the `login` endpoint no longer uses redirects.

  ```jsx
  export default function MyApp({ Component, pageProps }) {
    return (
      <ThirdwebProvider
        authConfig={{
          domain: "example.com",
          authUrl: "/api/auth",
          // No more loginRedirect
        }}
      >
        <Component {...pageProps} />
      </ThirdwebProvider>
    );
  }
  ```

  **2. Update `useLogin` and `useLogout` to use object destructuring**

  The `useLogin` and `useLogout` hooks now return an object with a `login` and `logout` function (as well as `isLoading` states), respectively. You'll need to update your usage of these hooks to use object destructuring.

  ```jsx
  import { useLogin, useLogout } from "@thirdweb-dev/react-core";

  export default function Component() {
    const { login } = useLogin();
    const { logout } = useLogout();

    return (
      <div>
        <button onClick={login}>Login</button>
        <button onClick={logout}>Logout</button>
      </div>
    );
  }
  ```

- [#511](https://github.com/thirdweb-dev/js/pull/511) [`62b7388`](https://github.com/thirdweb-dev/js/commit/62b7388bb2f2564fff0c5e86f0a468db65992b4e) Thanks [@ikethirdweb](https://github.com/ikethirdweb)! - react-core init

  `react-core` package creation. The goal is to share as much code as possible between our react and future react-native packages.

### Patch Changes

- [#514](https://github.com/thirdweb-dev/js/pull/514) [`48893c7`](https://github.com/thirdweb-dev/js/commit/48893c730e565c962d117b1eca579e240dc6a5ec) Thanks [@jnsdls](https://github.com/jnsdls)! - switch to using the new `@thirdweb-dev/react-core` package to power `@thirdweb-dev/react`
