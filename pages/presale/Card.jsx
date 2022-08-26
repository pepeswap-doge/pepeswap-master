import { Button, Typography } from "@material-ui/core";
import React, { useState } from "react";
import styled from "styled-components";
import MonarchLogo from "../../assets/img/monarch-logo.png"
import CardPyramid from "../../components/CardPyramid";
import CardContent from "../../components/CardContent";
import { useWallet } from 'use-wallet';
import TokenInput from "../../components/TokenInput";
import { getDisplayBalance } from "../../utils/formatBalance";
import useTokenBalance from "../../hooks/useTokenBalance";
import useTombFinance from "../../hooks/useTombFinance";
import BuyTokenComponent from "./components/BuyTokenComponentV2";

const CardWithBg = styled(CardPyramid)`
`

const Title = styled(Typography)`
font-family: 'Libre Baskerville', sans-serif !important;
font-size: 28px;
text-shadow: -1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #f000;
text-align: center;
`

const TextDescription = styled.p`
color: #fcfcfc;
font-family: 'EB Garamond', cursive;
text-align: center;
`

const Text = styled.p`
color: #fcfcfc;
font-family: 'EB Garamond', cursive;
text-align: center;
`

const ProgressOuter = styled.div`
width: 90%;
height: 30px;
`

const ProgressInner = styled.div`
filter: hue-rotate(205deg);
`

export default function Card(props) {

	return (
		<CardWithBg className="card mr-auto ml-auto" style={{ width: "100%" }}>
			<CardContent>
			<Title variant="h4" className="card-title py-1 my-3">Monarch Pre-Sale</Title>
			<img style={{alignSelf: 'center'}} src={MonarchLogo} width={100} height={120}></img>
			<TextDescription className="card-title">1 MONARCH = {props.tokenPrice ? (Number(props.tokenPrice) / 1e18).toFixed(2).toString(): 'loading'} FTM (~0.60$)</TextDescription>
			{/* <TextDescription className="card-title">1 MONARCH = 4.5$ (~3 AURORA)</TextDescription> */}
			<TextDescription className="card-title">Acquire <b>$MONARCH to farm $XELIM</b> in the <b>Genesis Pools</b>! $XELIM Token will be launching at 2.5 FTM in value!</TextDescription>
			<TextDescription className="card-title">In the Genesis Pools $MONARCH will give you around 1.1x the amount of $MONARCH tokens in $XELIM tokens! You will earn about 10% in number of tokens over two genesis days!</TextDescription>
			<TextDescription className="card-title">After Genesis Pools ending ending, $XELIM will be listed for ~0.70$ (~2.5 FTM) (aprox. 2.5 times over the peg), as starting price.</TextDescription>

			<BuyTokenComponent tokenPrice={props.tokenPrice} tokensAvailable={(40000 - parseInt(props.tokensSold).toString())}/>

			<ProgressOuter className="progress mb-3 mx-3">
				<ProgressInner
					className="progress-bar progress-bar-striped progress-bar-animated"
					role="progressbar"
					aria-valuenow={props.tokensSold}
					aria-valuemin="0"
					aria-valuemax="40000"
					style={{ width: (props.tokensSold / 40000) * 100 + "%" }}
				></ProgressInner>
			</ProgressOuter>
			<Text>
				<span>{props.tokensSold ? props.tokensSold : 'loading '}</span>/<span>40000 MONARCH</span>
			</Text>
			</CardContent>
		</CardWithBg>
	);
}
