import { Button, Grid, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import XelimLogo from "../../assets/img/potato-logo.png"
import CardPyramid from "../../components/CardPyramid";
import CardContent from "../../components/CardContent";
import Input from "../../components/Input";

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

const FormOuter = styled.form`
width: 90%;
`

const ProgressOuter = styled.div`
width: 90%;
height: 30px;
`

const StyledButton = styled(Button)`
// background: #b8af0b;
// border: 1px solid #b8af0b;
font-family: 'EB Garamond', cursive;
margin-bottom: 10px;

// &:hover {
// 	background: #f2e323;
// 	border: 1px solid #f2e323;	
// }

// &:disabled {
// 	background: #ad9f00;
// 	border: 1px solid #ad9f00;	
// }
`

const StyledInput = styled(Input)`
font-family: 'EB Garamond', cursive;
border-radius: 10px;
margin: 5px;
color: #fcfcfc !important;

& ::placeholder {
	color: #fcfcfc !important;
}
`

const GridOuter = styled(Grid)`
display: grid;
grid-template-rows: 1fr 1fr;
grid-template-columns: 1fr 1fr;
`

const GridOuterInput = styled(Grid)`
display: grid;
grid-template-columns: 1fr 1fr;
`

const ProgressInner = styled.div`
filter: hue-rotate(205deg);
`

export default function CardAirdrop(props) {
	const [tokens, setTokens] = useState(1);
	const [completedStep1, setCompletedStep1] = useState(false);
	const [completedStep2, setCompletedStep2] = useState(false);
	const [completedStep3, setCompletedStep3] = useState(false);
	const [completedStep4, setCompletedStep4] = useState(false);

	const [verifiedSteps, setVerifiedSteps] = useState(false);
	const [makingRequest, setMakingRequest] = useState(false);
	const [claimedAirdrop, setClaimedAirdrop] = useState(false);
	const [loadingInformations, setLoadingInformations] = useState(true);

	const [userActualTwitterName, setUserActualTwitterName] = useState("");
	const [userActualDiscordName, setUserActualDiscordName] = useState("");


	const loadAllInformations = () => {
		if (props.claimedAirdrop === "1") {
			setClaimedAirdrop(true)
		}
		setLoadingInformations(false)
	};

	const handleVerifyFollow = async () => { // ACABAR ISTO
		setMakingRequest(true)
		let pinnedTweetId = '1' // PADRADA METER A 1
		let isFollowingXelim = true // PADRADA METER A TRUE

		if (isFollowingXelim) { // like (data.userslist).contains(Xelim_finance)
			setCompletedStep1(true)
		}
		if (pinnedTweetId !== "0") { // like (data.retweets).contains(tweet_id)
			setCompletedStep2(true)
		}
		if (userActualDiscordName !== "") {
        	setCompletedStep3(true)
			setCompletedStep4(true)
		}
		setTimeout(function () {
			setMakingRequest(false)
		}, 15000);	
	};

	const handleChangeTwitterName = (event) => {
		event.preventDefault();
		setUserActualTwitterName(event.target.value);
	};

	const handleChangeDiscordName = (event) => {
		event.preventDefault();
		setUserActualDiscordName(event.target.value);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		await props.getAirdrop();
	};

	useEffect(() => {
		if(loadingInformations) {
			loadAllInformations()
		}
		setLoadingInformations(false)
	}, [loadingInformations]);

	useEffect(() => {
		if (completedStep1 && completedStep2 && completedStep3 && completedStep4) {
			setVerifiedSteps(true)
		}
	}, [completedStep1, completedStep2, completedStep3, completedStep4]);

	return (
		<CardWithBg className="card mr-auto ml-auto" style={{ width: "100%" }}>
			<CardContent>
			<Title variant="h4" className="card-title py-1 my-3">Xelim Airdrop</Title>
			<img style={{alignSelf: 'center'}} src={XelimLogo} width={100} height={120}></img>
			<TextDescription className="card-title">To receive your <b>free 0.1 XELIM</b>, just complete the steps down below.</TextDescription>
			<GridOuter>
			<TextDescription className="card-title">1. Follow @Haunted_Farmfi on Twitter: { makingRequest ? ('🟡') : (!completedStep1 ? '🔴' : '🟢') }</TextDescription>
			<TextDescription className="card-title">2. Retweet @Haunted_Farmfi pinned post on Twitter: { makingRequest ? ('🟡') : (!completedStep2 ? '🔴' : '🟢') }</TextDescription>
			<TextDescription className="card-title">3. Join Royal Family Finance on Discord: { makingRequest ? ('🟡') : (!completedStep4 ? '🔴' : '🟢') }</TextDescription>
			</GridOuter>
			{ claimedAirdrop === "1" ? (
				<StyledButton style={{marginTop: '10px'}}disabled>Already Claimed</StyledButton>
			) : ( !verifiedSteps ? (
				<>
				<GridOuterInput>
					<StyledInput type="text" placeholder="Twitter Username" onChange={handleChangeTwitterName}></StyledInput>
					<StyledInput type="text" placeholder="Discord Username" onChange={handleChangeDiscordName}></StyledInput>
					</GridOuterInput>
					<StyledButton style={{marginTop: '10px'}}disabled={userActualTwitterName === "" || userActualDiscordName === "" || makingRequest || (props.tokensLeft/10**18) === 0} onClick={handleVerifyFollow} variant="contained" color="primary" className="btn btn-primary input-group-btn">
						Verify Steps
					</StyledButton>
				</>
			) : (
				<FormOuter style={{marginTop: '10px'}}className="form-group my-3 mx-3" onSubmit={handleSubmit}>
						<StyledButton disabled={makingRequest || (props.tokensAirdroped/10**18) === 1000} type="submit" variant="contained" color="primary" className="btn btn-primary input-group-btn">
							Claim XELIM
						</StyledButton>
			</FormOuter>
			))}
			

			<ProgressOuter className="progress mb-3 mx-3">
				<ProgressInner
					className="progress-bar progress-bar-striped progress-bar-animated"
					role="progressbar"
					aria-valuenow={(props.tokensAirdroped/10**18)}
					aria-valuemin="0"
					aria-valuemax="1000"
					style={{ width: (((props.tokensAirdroped/10**18)) / 1000) * 100 + "%" }}
				></ProgressInner>
			</ProgressOuter>
			<Text>
				<span>{props.tokensAirdroped ? ((props.tokensAirdroped/10**18)).toFixed(2) : '0'}</span>/<span>1000 XELIM</span>
			</Text>
			</CardContent>
		</CardWithBg>
	);
}
