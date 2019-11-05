import React from "react";
import styled from "styled-components";
import { object } from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ReactCodeInput from "react-verification-code-input";
import ReactToolTip from "react-tooltip";

import Title from "../Title";
import Phone from "./Phone";
import Icon from "../Icon";
import { changeCode } from "../../Actions/actions";

const Confirm = ({ phone, history, changeCode }) => {
	const { phoneNumber, countrySelector, verificationCodeUser, verificationCode } = phone;
	const fullPhone = `${countrySelector} ${phoneNumber}`;

	return (
		<Container>
			<Title titleType="heading" text="Sign In / Register" />

			<Wrapper
				onSubmit={e => {
					e.preventDefault();

					if (parseInt(verificationCodeUser) === verificationCode) {
						return history.push("/profile");
					}
				}}>
				<EditWrapper>
					<Phone phoneNumber={fullPhone} />

					<EditContainer>
						<Icon iconType="edit" history={history} />
						<EditText>Edit Number</EditText>
					</EditContainer>
				</EditWrapper>

				<CodeWrapper>
					<ReactCodeInput autoFocus type="number" onChange={code => changeCode(code)} />
					<Icon iconType="renewCode" dataTip="Resend Code" />
					<ReactToolTip />
				</CodeWrapper>
			</Wrapper>

			<Title
				titleType="placeholder"
				text={`Enter the verification code that we sent\n to ${fullPhone}`}
			/>
		</Container>
	);
};

// Styled components
const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100%;
	width: 100%;
	position: absolute;
`;

const Wrapper = styled.form`
	background: #ffffff;
	min-width: 345px;
	height: 126px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	padding-left: 24px;
	padding-right: 24px;

	@media screen and (min-width: 768px) {
		min-width: 730px;
		height: 132px;

		display: flex;
		align-items: center;
		justify-content: center;
	}
`;

const EditWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding-top: 16px;
	padding-bottom: 18px;

	@media screen and (min-width: 768px) {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		padding: 16px;

		&:hover {
			background: #f1f1f1;
			border-radius: 4px;
		}
	}
`;

const CodeWrapper = styled.div`
	padding-bottom: 20px;
	display: flex;
	align-items: center;
	justify-content: center;

	@media screen and (min-width: 768px) {
		margin-left: 40px;
	}
`;

const EditText = styled.button`
	text-align: center;
	background: none;
	border: 0;
	cursor: pointer;
	font-family: "Rubik";
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	line-height: 22px;
	color: rgba(38, 38, 38, 0.5);
	outline: none;

	visibility: hidden;
	display: none;
	@media screen and (min-width: 768px) {
		visibility: visible;
		display: block;
	}
`;

const EditContainer = styled.div`
	margin-left: 8px;
	@media screen and (min-width: 768px) {
		display: flex;
		align-items: center;
		margin-top: 4px;
		cursor: pointer;
		visibility: visible;
	}
`;

// Prop types
Confirm.propTypes = {
	phone: object.isRequired,
};

// Redux
const mapStateToProps = state => ({ phone: state.phoneReducer });

const mapDispatchToProps = dispatch => bindActionCreators({ changeCode }, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Confirm);
