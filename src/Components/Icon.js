import { string, func, bool } from "prop-types";
import React from "react";
import styled from "styled-components";

const Icon = ({ iconType, toggle, phoneEntered, history, dataTip }) => {
	switch (iconType) {
		case "removeContact":
			return (
				<Remove>
					<svg
						width="19"
						height="24"
						viewBox="0 0 19 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M1.35714 21.3333C1.35714 22.8 2.57857 24 4.07143 24H14.9286C16.4214 24 17.6429 22.8 17.6429 21.3333V5.33333H1.35714V21.3333ZM19 1.33333H14.25L12.8929 0H6.10714L4.75 1.33333H0V4H19V1.33333Z"
							fill="#262626"
						/>
					</svg>
				</Remove>
			);

		case "close":
			return (
				<Close
					onClick={toggle}
					width="16"
					height="16"
					viewBox="0 0 16 16"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M1 1L14.5 14.5"
						stroke="#262626"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M14.5 1L1 14.5"
						stroke="#262626"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</Close>
			);

		case "add":
			return (
				<Add
					width="14"
					height="14"
					viewBox="0 0 14 14"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M7 1V13"
						stroke="#262626"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M1 7L13 7"
						stroke="#262626"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</Add>
			);

		case "logout":
			return (
				<svg
					width="15"
					height="15"
					viewBox="0 0 15 15"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M14.9527 6.63627C14.9208 6.56 14.8752 6.49063 14.8171 6.4325L12.9426 4.55806C12.6982 4.3143 12.3032 4.3143 12.0589 4.55806C11.8145 4.80243 11.8145 5.19807 12.0589 5.44183L12.867 6.24998H9.37563C9.03 6.24998 8.75062 6.52997 8.75062 6.87498C8.75062 7.21999 9.03 7.49999 9.37563 7.49999H12.867L12.0588 8.30814C11.8145 8.55251 11.8145 8.94815 12.0588 9.19191C12.1807 9.3144 12.3407 9.37505 12.5007 9.37505C12.6607 9.37505 12.8207 9.31443 12.9426 9.19191L14.8171 7.31747C14.8752 7.25996 14.9208 7.19058 14.9527 7.1137C15.0158 6.96127 15.0158 6.78876 14.9527 6.63627Z"
						fill="#262626"
					/>
					<path
						d="M10.6253 8.75026C10.2797 8.75026 10.0003 9.03026 10.0003 9.37527V12.5004H7.50022V2.50006C7.50022 2.22443 7.31895 1.98067 7.05457 1.90131L4.88387 1.25005H10.0003V4.37515C10.0003 4.72016 10.2797 5.00015 10.6253 5.00015C10.9709 5.00015 11.2503 4.72016 11.2503 4.37515V0.625038C11.2503 0.279998 10.9709 0 10.6253 0H0.625008C0.602508 0 0.582497 0.00937527 0.560641 0.0118656C0.531256 0.0150004 0.50439 0.019981 0.476264 0.026866C0.410637 0.0437415 0.35125 0.069377 0.295643 0.104358C0.281903 0.113119 0.265027 0.113734 0.251902 0.123724C0.246863 0.127504 0.244988 0.134389 0.239978 0.138139C0.17186 0.191871 0.114994 0.257498 0.0737424 0.335635C0.0649824 0.35251 0.0631073 0.370645 0.0562516 0.388136C0.0362413 0.435628 0.0143852 0.481889 0.00688497 0.53439C0.00375011 0.553141 0.00937527 0.570632 0.00876002 0.588767C0.00814477 0.601277 0 0.612527 0 0.625008V13.1254C0 13.4235 0.210621 13.6798 0.502515 13.7379L6.75269 14.988C6.79332 14.9967 6.83457 15.0005 6.87518 15.0005C7.0183 15.0005 7.15893 14.9511 7.27143 14.8586C7.41581 14.7398 7.50019 14.5629 7.50019 14.3754V13.7504H10.6253C10.9709 13.7504 11.2503 13.4704 11.2503 13.1254V9.37527C11.2503 9.03026 10.9709 8.75026 10.6253 8.75026Z"
						fill="#262626"
					/>
				</svg>
			);

		case "renewCode":
			return (
				<Renew xmlns="http://www.w3.org/2000/svg" viewBox="0 0 489.711 489.711" data-tip={dataTip}>
					<path d="M112.156 97.111c72.3-65.4 180.5-66.4 253.8-6.7l-58.1 2.2c-7.5.3-13.3 6.5-13 14 .3 7.3 6.3 13 13.5 13h.5l89.2-3.3c7.3-.3 13-6.2 13-13.5v-1-.6l-3.3-88.2c-.3-7.5-6.6-13.3-14-13-7.5.3-13.3 6.5-13 14l2.1 55.3c-36.3-29.7-81-46.9-128.8-49.3-59.2-3-116.1 17.3-160 57.1-60.4 54.7-86 137.9-66.8 217.1 1.5 6.2 7 10.3 13.1 10.3 1.1 0 2.1-.1 3.2-.4 7.2-1.8 11.7-9.1 9.9-16.3-16.8-69.6 5.6-142.7 58.7-190.7zM462.456 195.511c-1.8-7.2-9.1-11.7-16.3-9.9-7.2 1.8-11.7 9.1-9.9 16.3 16.9 69.6-5.6 142.7-58.7 190.7-37.3 33.7-84.1 50.3-130.7 50.3-44.5 0-88.9-15.1-124.7-44.9l58.8-5.3c7.4-.7 12.9-7.2 12.2-14.7s-7.2-12.9-14.7-12.2l-88.9 8c-7.4.7-12.9 7.2-12.2 14.7l8 88.9c.6 7 6.5 12.3 13.4 12.3.4 0 .8 0 1.2-.1 7.4-.7 12.9-7.2 12.2-14.7l-4.8-54.1c36.3 29.4 80.8 46.5 128.3 48.9 3.8.2 7.6.3 11.3.3 55.1 0 107.5-20.2 148.7-57.4 60.4-54.7 86-137.8 66.8-217.1z" />
				</Renew>
			);

		case "edit":
			return (
				<Edit
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					onClick={_ => history.push("/")}>
					<EditCircle cx="12" cy="12" r="12" fill="#F1F1F1" />
					<path
						d="M13.4619 8.00265L15.903 10.4556L9.72394 16.6649L7.28425 14.2119L13.4619 8.00265ZM17.7553 7.41104L16.6666 6.31708C16.2459 5.89431 15.5628 5.89431 15.1406 6.31708L14.0978 7.36498L16.5389 9.81801L17.7553 8.59569C18.0816 8.26776 18.0816 7.73894 17.7553 7.41104ZM6.00679 17.6598C5.96237 17.8607 6.14288 18.0408 6.34283 17.9919L9.063 17.3291L6.62331 14.8761L6.00679 17.6598Z"
						fill="#262626"
						fillOpacity="0.5"
					/>
				</Edit>
			);

		case "downArrow":
			return (
				<DownArrow
					width="11"
					height="5"
					viewBox="0 0 25 14"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						opacity="0.5"
						d="M1 1L12.5 12.5L24 1"
						stroke="#262626"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</DownArrow>
			);

		case "rightArrow":
			return (
				<RightArrow
					width="26"
					height="11"
					viewBox="0 0 58 26"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<RightArrowPath
						opacity="0.3"
						d="M1 13H56.5M56.5 13L44.5 1M56.5 13L44.5 25"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						phoneEntered={phoneEntered}
					/>
				</RightArrow>
			);

		default:
			return null;
	}
};

// Styled components
const RightArrow = styled.svg`
	@media screen and (min-width: 768px) {
		width: 55.5px;
		height: 24px;
	}
`;

const RightArrowPath = styled.path`
	stroke: ${({ phoneEntered }) => (phoneEntered ? "#000000" : "#bfbfbf")};
	cursor: ${({ phoneEntered }) => (phoneEntered ? "pointer" : "default")};

	&:hover {
		stroke: ${({ phoneEntered }) => (phoneEntered ? "#3370e7" : "#bfbfbf")};
	}
`;

const DownArrow = styled.svg`
	cursor: pointer;

	&:hover {
		path {
			stroke: #3370e7;
		}
	}

	@media screen and (min-width: 768px) {
		height: 12px;
		width: 25px;
		height: 14px;
	}
`;

const EditCircle = styled.circle`
	background: #f1f1f1;
	cursor: pointer;

	@media screen and (min-width: 768px) {
		visibility: hidden;
	}
`;

const Renew = styled.svg`
	width: 16px;
	height: 17px;
	margin-left: 16px;
	height: 12px;
	cursor: pointer;

	@media screen and (min-width: 768px) {
		width: 24px;
		height: 26px;
		margin-left: 35px;
	}
`;

const Add = styled.svg`
	margin-right: 12px;
`;

const Close = styled.svg`
	cursor: pointer;
	margin-top: 32px;
	margin-right: 32px;

	@media screen and (min-width: 768px) {
		margin-top: 24px;
		margin-right: 24px;
	}
`;

const Edit = styled.svg`
	width: 20px;
	height: 20px;

	@media screen and (min-width: 768px) {
		width: 24px;
		height: 24px;
	}
`;

const Remove = styled.div`
	background: #ffffff;
	padding: 20px;
	height: 64px;
	width: 64px;
	border-radius: 100px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

// Prop types
Icon.propTypes = {
	iconType: string.isRequired,
	toggle: func,
	phoneEntered: bool,
};

export default Icon;
