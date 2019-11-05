import React from "react";
import { string } from "prop-types";
import styled from "styled-components";

const Phone = ({ phoneNumber }) => {
	return <P>{phoneNumber}</P>;
};

// Styled components
const P = styled.p`
	font-family: "Rubik";
	font-style: normal;
	font-weight: normal;
	font-size: 18px;
	line-height: 21px;
	color: #262626;

	@media screen and (min-width: 768px) {
		font-size: 24px;
		line-height: 28px;
		cursor: pointer;
	}
`;

// Prop types
Phone.propTypes = {
	phoneNumber: string.isRequired,
};

export default Phone;
