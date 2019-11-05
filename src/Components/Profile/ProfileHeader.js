import React from "react";
import styled from "styled-components";
import { func } from "prop-types";

import Title from "../Title";
import Logout from "./Logout";

const ProfileHeader = ({ logoutUser, fullName }) => {
	return (
		<Wrapper>
			<InitialsWrapper>
				<Title titleType="initials" text="Jorge Edwards" />
				<Logout logoutUser={logoutUser} />
			</InitialsWrapper>

			<Title titleType="name" text="Jorge Edwards" />
		</Wrapper>
	);
};

// Styled components
const Wrapper = styled.header``;

const InitialsWrapper = styled.div`
	margin-top: 55px;

	@media screen and (min-width: 786px) {
		align-items: flex-start;
	}
`;

// Prop types
ProfileHeader.propTypes = {
	logoutUser: func,
};

export default ProfileHeader;
