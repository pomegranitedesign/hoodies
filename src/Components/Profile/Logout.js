import React from "react";
import styled from "styled-components";
import { func } from "prop-types";

import Icon from "../Icon";

const Logout = ({ logoutUser }) => {
	return (
		<Wrapper onClick={_ => logoutUser()}>
			<Icon iconType="logout" />
			<LogoutText>Logout</LogoutText>
		</Wrapper>
	);
};

// Styled components
const Wrapper = styled.button`
	background: none;
	border: 1px solid #262626;
	box-sizing: border-box;
	box-shadow: 0px 10px 30px rgba(51, 112, 231, 0.1);
	border-radius: 100px;
	padding: 18px;
	outline: none;
	cursor: pointer;
	margin-left: 18px;
	position: absolute;
	top: 0;
	right: 0;

	@media screen and (min-width: 768px) {
		display: flex;
		align-items: center;
	}
`;

const LogoutText = styled.p`
	display: none;
	@media screen and (min-width: 768px) {
		margin-left: 12px;
		display: block;
	}
`;

// Prop types
Logout.propTypes = {
	logoutUser: func,
};

export default Logout;
