import React from "react";
import { connect } from "react-redux";
import { string } from "prop-types";
import styled from "styled-components";
import MaskedInput from "react-text-mask";
import { bindActionCreators } from "redux";

import Icon from "../Icon";
import { changePhone } from "../../Actions/actions";
import { checkPhone } from "../../Misc/helpers";

const Input = ({ inputType, changePhone, phone, history }) => {
	const { phoneNumber } = phone;

	// Это нам поможет в проверке ввода телефона
	let phoneEntered = false;
	checkPhone(phoneNumber).then(isEntered => (phoneEntered = isEntered));

	switch (inputType) {
		case "phone":
			return (
				<PhoneInput
					onSubmit={e => {
						e.preventDefault();

						if (phoneEntered) {
							history.push("/confirm");
						}
					}}>
					<div style={{ display: "flex", alignItems: "center" }}>
						<Selector>+7</Selector>
						<Icon iconType="downArrow" />
					</div>
					<InputMask
						autoFocus
						mask={[/[1-9]/, /\d/, /\d/, " ", /\d/, /\d/, /\d/, "-", /\d/, /\d/, "-", /\d/, /\d/]}
						placeholder="000 000-00-00"
						onChange={e => changePhone(e.target.value)}
						value={phoneNumber}
					/>

					<RightArrowButton disabled={phoneEntered}>
						<Icon iconType="rightArrow" phoneEntered={phoneEntered} />
					</RightArrowButton>
				</PhoneInput>
			);

		default:
			return null;
	}
};

// Styled components
const PhoneInput = styled.form`
	/* Выравниваем input по центру страницы */
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 345px;
	height: 64px;
	font-size: 22px;
	padding-left: 24px;
	padding-right: 24px;
	background: #ffffff;
	box-shadow: 0px 4.72603px 6.61644px rgba(12, 12, 70, 0.03);
	border-radius: 4.72603px;
	color: #262626;
	display: flex;
	align-items: center;
	justify-content: center;

	@media screen and (min-width: 768px) {
		width: 730px;
		height: 132px;
	}
`;

// "Пересоздаём" MaskedInput для того что бы можно было
// задать стили
const InputMask = styled(MaskedInput)`
	font-family: "Rubik";
	font-style: normal;
	font-weight: normal;
	font-size: 22px;
	line-height: 26px;
	border: none;
	width: 166px;
	margin-left: 16px;

	&::-webkit-input-placeholder {
		color: #262626;
		opacity: 0.2;
	}

	@media screen and (min-width: 768px) {
		width: 363px;
		height: 57px;
		font-size: 48px;
		line-height: 57px;
		margin-left: 31px;
	}
`;

// TODO: Remove when the selector is complete
const Selector = styled.p`
	font-family: "Rubik";
	font-style: normal;
	font-weight: normal;
	font-size: 22px;
	line-height: 26px;
	color: #262626;
	display: inline-block;
	margin-right: 8px;

	@media screen and (min-width: 768px) {
		font-size: 48px;
		line-height: 57px;
	}
`;

const RightArrowButton = styled.button`
	background: none;
	border: none;
	margin-left: 53px;

	@media screen and (min-width: 768px) {
		margin-left: 92px;
	}

	&:focus {
		outline: none;
	}
`;

// Prop types
Input.propTypes = {
	inputType: string.isRequired,
};

// Actions
const mapDispatchToProps = dispatch => bindActionCreators({ changePhone }, dispatch);

// State
const mapStateToProps = state => ({
	phone: state.phoneReducer,
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Input);
