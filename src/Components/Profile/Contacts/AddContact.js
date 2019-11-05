import React, { Fragment } from "react";
import styled from "styled-components";

import Portal from "../../Portal";
import Toggle from "../../Toggle";
import Icon from "../../Icon";
import Title from "../../Title";
import { getfirstAndLast } from "../../../Misc/helpers";

const AddContact = ({ addContact, contacts }) => {
	let firstName = "";
	let lastName = "";

	return (
		<Toggle>
			{({ on, toggle }) => (
				<Fragment>
					<Button onClick={toggle}>
						<Icon iconType="add" />
						Add New Contact
					</Button>

					{on ? (
						<Portal>
							<Container>
								<Modal
									onSubmit={e => {
										e.preventDefault();
										addContact(firstName, lastName);
										toggle();
									}}>
									<IconContainer>
										<Icon iconType="close" toggle={toggle} />
									</IconContainer>

									<Title titleType="addContact" text="Add New Contact" />

									<NameInput
										placeholder="Enter contact’s full name"
										type="text"
										onChange={e => {
											const fullName = e.target.value;
											firstName = getfirstAndLast(fullName)[0];
											lastName = getfirstAndLast(fullName)[1];
										}}
									/>

									<AddButton>Add to my List</AddButton>
								</Modal>
							</Container>

							<Overlay onClick={toggle} />
						</Portal>
					) : null}
				</Fragment>
			)}
		</Toggle>
	);
};

// Styled components
const Button = styled.button`
	cursor: pointer;
	background: none;
	margin: 12px auto;
	display: block;
	border: 1px solid #262626;
	box-sizing: border-box;
	border-radius: 100px;
	width: 345px;
	height: 64px;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	padding-left: 26px;
	font-family: "Rubik";
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	line-height: 19px;
	color: #262626;
	outline: none;
	transition: all 300ms cubic-bezier(0.165, 0.84, 0.44, 1);

	&:hover {
		box-shadow: 0px 10px 14px rgba(12, 12, 70, 0.03);
		background: #ffffff;
		border: 1px solid #f5f5f6;
	}
`;

const Modal = styled.form`
	position: fixed;
	bottom: 0;
	left: 0;
	height: 100%;
	width: 100%;
	background: #ffffff;
	border-top-left-radius: 5px;
	border-top-right-radius: 5px;
	z-index: 1;

	@media screen and (min-width: 768px) {
		width: 540px;
		height: 268px;
		border-radius: 4px;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}
`;

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

const IconContainer = styled.div`
	display: flex;
	justify-content: flex-end;
`;

const NameInput = styled.input`
	background: #f1f1f1;
	border-radius: 4px;
	width: 345px;
	height: 62px;
	padding-left: 20px;
	border: none;
	margin-top: 32px;
	margin-left: auto;
	margin-right: auto;
	display: block;

	@media screen and (min-width: 768px) {
		width: 460px;
		margin-top: 24px;
		margin-left: 40px;
	}
`;

const AddButton = styled.button`
	display: block;
	margin: 24px auto;
	min-width: 345px;
	height: 50px;
	background: #3370e7;
	box-shadow: 0px 10px 30px rgba(51, 112, 231, 0.1);
	border-radius: 100px;
	border: 0;
	font-family: "Rubik";
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	line-height: 22px;
	text-align: center;
	cursor: pointer;
	outline: 0;
	color: #ffffff;

	&:hover {
		background: linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), #3370e7;
		box-shadow: 0px 10px 30px rgba(51, 112, 231, 0.1);
	}

	@media screen and (min-width: 768px) {
		min-width: 160px;
		margin: 24px 0 40px 40px;
	}
`;

const Overlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: #262626;
	opacity: 0.5;
	overflow: hidden;
`;

export default AddContact;
