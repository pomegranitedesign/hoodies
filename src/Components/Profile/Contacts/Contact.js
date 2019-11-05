import React from "react";
import styled from "styled-components";
import { string } from "prop-types";

import Icon from "../../Icon";

const Contact = ({ name, id }) => {
	return (
		<ContentWrapper>
			<Wrapper>{name}</Wrapper>
			<Icon iconType="removeContact" />
		</ContentWrapper>
	);
};

// Styled components
const Wrapper = styled.li`
	font-family: "Rubik";
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	line-height: 19px;
	color: #ffffff;
	list-style: none;
	width: 345px;
	height: 64px;
	display: flex;
	align-items: center;
	padding-left: 24px;
	margin: 12px auto 0 auto;
	background: #3370e7;
	border-radius: 100px;
	cursor: pointer;
	transition: all 300ms cubic-bezier(0.165, 0.84, 0.44, 1);

	&:hover {
		background: #3370e7;
		box-shadow: 0px 10px 30px rgba(51, 112, 231, 0.6);
	}
`;

const ContentWrapper = styled.div`
	display: flex;
	align-items: center;
`;

// Prop types
Contact.propTypes = {
	name: string.isRequired,
};

export default Contact;
