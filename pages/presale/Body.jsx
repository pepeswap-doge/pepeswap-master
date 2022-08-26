import React from "react";
import styled from "styled-components";
import { Grid } from "@material-ui/core";
import Card from "./Card";
import CardAirdrop from "./CardAirdrop"

const Title = styled.h2`
font-family: 'Libre Baskerville', sans-serif !important;
color: #7C7900;
text-shadow: -1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000;
`

const GridOuter = styled.div`
display: grid;
grid-template-rows: 20% 80%;
`

const GridInnerUp = styled.div`
display: grid;
grid-template-columns: 1fr;
`

const GridInnerDown = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;

@media(max-width: 700px) {
	grid-template-columns: 1fr;
}
`

const Text = styled.p`
color: #7C7900;
text-shadow: -1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000;
font-family: 'EB Garamond', cursive;
font-weight: 900;
font-size: 1.3em;
`

export default function Body(props) {
	return (
		<>
		<Grid container spacing={3} justifyContent="center">

		<Grid item xs={12} sm={6}>
		<div className="container text-center ">
			<Card
				tokenPriceInETH={props.tokenPrice}
				tokensSold={props.tokensSold}
				tokenPrice={props.tokenPrice}
				tokenSale={props.tokenSale}
			/>
			
		</div>
		</Grid>
		{/* <Grid item xs={12} sm={6}>
			<div className="container text-center ">
			<CardAirdrop
				buyTokens={props.buyTokens}
				tokensSold={props.tokensSold}
				tokenPrice={props.tokenPrice}
				tokensAirdroped={props.tokensAirdroped}
				tokenSale={props.tokenSale}
				getAirdrop={props.getAirdrop}
				tokensLeft={props.tokensLeft}
				claimedAirdrop={props.claimedAirdrop}
				account={props.account}
			/>
		</div> */}
		{/* </Grid> */}
		</Grid>
		</>
	);
}
