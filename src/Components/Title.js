/**
 *
 * @Title Component
 * @titleType -> Тип заголовка для вывода (heading, placeholder)
 *
 */

import React from "react";
import { string } from "prop-types";
import styled from "styled-components";

import { getInitials } from "../Misc/helpers";
import withEditContent from "../Hoc/withEditContent";

// В зависимости от того какой titleType передаётся
// будет рендериться тот или иной заголовок
const Title = ({ titleType, text = "" }) => {
	switch (titleType) {
		case "addContact":
			return <AddContact>{text}</AddContact>;

		case "name":
			const EditableName = withEditContent(Name);
			return <EditableName value={text}>{text}</EditableName>;

		case "initials":
			return <Initials>{getInitials(text)}</Initials>;

		case "heading":
			return <MainTitle>{text}</MainTitle>;

		case "placeholder":
			return <Placeholder>{text}</Placeholder>;

		default:
			return <h1>{text}</h1>;
	}
};

// Styled components
const MainTitle = styled.h1`
	font-family: "Rubik";
	font-style: normal;
	font-weight: normal;
	font-size: 24px;
	line-height: 28px;
	text-align: center;
	color: #262626;
	margin-top: 56px;

	@media screen and (min-width: 768px) {
		margin-top: 150px;
	}
`;

const Placeholder = styled.p`
	font-family: "Rubik";
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	line-height: 22px;
	text-align: center;
	color: #262626;
	opacity: 0.5;
	position: absolute;
	bottom: 40px;
	width: 100%;

	@media screen and (min-width: 768px) {
		bottom: 60px;
	}
`;

const Initials = styled.h1`
	font-family: "Rubik";
	font-style: normal;
	font-weight: normal;
	font-size: 24px;
	line-height: 28px;
	text-align: center;
	color: #000000;
	height: 92px;
	width: 92px;
	display: flex;
	align-items: center;
	justify-content: center;
	background: #ffffff;
	border-radius: 100px;
	margin: 0 auto;
`;

const Name = styled.h1`
	font-family: "Rubik";
	font-style: normal;
	font-weight: normal;
	font-size: 24px;
	line-height: 28px;
	text-align: center;
	color: #262626;
	width: 198px;
	margin: 9px auto;
	padding: 10px;
	cursor: pointer;
	transition: all 300ms cubic-bezier(0.075, 0.82, 0.165, 1);

	&:hover {
		background: #e3e3e5;
		border-radius: 8px;
	}
`;

const AddContact = styled.h1`
	font-family: "Rubik";
	font-style: normal;
	font-weight: normal;
	font-size: 48px;
	line-height: 57px;
	color: #262626;
	max-width: 304px;
	margin-left: 15px;
	margin-top: 20px;
	text-align: left;

	@media screen and (min-width: 768px) {
		font-size: 24px;
		line-height: 28px;
		margin-left: 40px;
		margin-top: 2.5px;
	}
`;

// Prop types
Title.propTypes = {
	titleType: string.isRequired,
	text: string.isRequired,
};

export default Title;
