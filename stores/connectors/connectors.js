import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import { NetworkConnector } from "@web3-react/network-connector";

const POLLING_INTERVAL = 12000;
const RPC_URLS = {
  // 250: "https://rpc.ftm.tools",
 // 4002: "https://rpc.testnet.fantom.network",
  2000: "https://rpc01-sg.dogechain.dog",
};

let obj = {}
if(process.env.NEXT_PUBLIC_CHAINID == 2000) {
  obj = { 2000: RPC_URLS[2000] }
}

export const network = new NetworkConnector({ urls: obj });

export const injected = new InjectedConnector({
  supportedChainIds: [parseInt(process.env.NEXT_PUBLIC_CHAINID)]
});

export const walletconnect = new WalletConnectConnector({
  rpc: {
    // 250: RPC_URLS[250],
   // 4002: RPC_URLS[4002],
    2000: RPC_URLS[2000]
  },
  chainId: parseInt(process.env.NEXT_PUBLIC_CHAINID),
  bridge: "https://bridge.walletconnect.org",
  qrcode: true,
  pollingInterval: POLLING_INTERVAL
});

export const walletlink = new WalletLinkConnector({
  url: RPC_URLS[process.env.NEXT_PUBLIC_CHAINID],
  appName: "PepeSwap",
  chainId: parseInt(process.env.NEXT_PUBLIC_CHAINID),
});
