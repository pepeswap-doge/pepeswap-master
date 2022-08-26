import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle } from 'styled-components';
import "./App.css";
import Body from "./Body";
// import LoadingIcon from "../assets/egypt.gif"
import HomeImage from '../../assets/img/general-bg.jpg';

import useGetAirdropIcoAirdrop from "../../hooks/useGetAirdropIcoAirdrop";
import useBuyTokensIcoAirdrop from "../../hooks/useBuyTokenIcoAirdrop";
import useAirdropIcoInfo from "../../hooks/useIcoAirdropInfo";
import Page from "../../components/Page";
import PageHeader from "../../components/PageHeader";
import useWallet from "use-wallet";
import UnlockWallet from "../../components/UnlockWallet";

const BackgroundImage = createGlobalStyle`
  body {
    ${localStorage.getItem('theme-royal') === "theme-royal-v2" ? (`background: url(${HomeImage}) no-repeat !important;`) : (`background: url(${HomeImage}) no-repeat !important;`)};
    background-size: cover !important;
  }
`;

const App: React.FC = () => {
	const [tokenBalance, setTokenBalance] = useState("0");
	const { account } = useWallet()

	const { onGetAirdrop } = useGetAirdropIcoAirdrop();

	const icoAirdropInfo = useAirdropIcoInfo();

	const tokenPrice = icoAirdropInfo ? icoAirdropInfo.tokenPrice : ""
	const tokensSold = icoAirdropInfo ? icoAirdropInfo.tokensSold : ""
	const tokensLeft = icoAirdropInfo ? icoAirdropInfo.tokensLeft : ""
	const claimedAirdrop = icoAirdropInfo ? icoAirdropInfo.claimedAirdrop : ""
	const tokensAirdroped = icoAirdropInfo ? icoAirdropInfo.tokensAirdroped : ""

	return (
		<Page>
			<BackgroundImage/>
			<PageHeader icon="s" title="Pre-sale" subtitle="Acquire $MONARCH to farm in the Genesis Pools!" />
			{ account ? (<>
			<div id="notification-area"></div>
				<Body
				account={account}
				tokenBalance={tokenBalance}
				tokenPrice={tokenPrice}
				tokensSold={tokensSold}
				getAirdrop={onGetAirdrop}
				tokensLeft={tokensLeft}
				claimedAirdrop={claimedAirdrop}
			/>
			</>
			) : (
				<UnlockWallet/>
			)}

			</Page>
	);
}

export default App;