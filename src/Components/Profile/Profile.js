import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import ProfileHeader from "./ProfileHeader";
import Contacts from "./Contacts/Contacts";
import { logoutUser, fetchContacts, addContact } from "../../Actions/actions";

class Profile extends Component {
	componentDidMount() {
		this.props.fetchContacts();
	}

	render() {
		const { user, history } = this.props;
		const { firstName, lastName, notLoggedIn, contacts } = user;
		const fullName = `${firstName} ${lastName}`;

		// Если пользователь не вошёл
		if (notLoggedIn) {
			setTimeout(_ => history.push("/"), 2000);

			return (
				<div
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						height: "100%",
						width: "100%",
						position: "absolute",
					}}>
					<h1>Please LogIn</h1>
				</div>
			);
		} else {
			return (
				<Wrapper>
					<ProfileHeader logoutUser={logoutUser} fullName={fullName} />
					<Contacts contacts={contacts} addContact={addContact} />
				</Wrapper>
			);
		}
	}
}

// Styled components
const Wrapper = styled.div``;

// Redux
const mapStateToProps = state => ({
	user: state.userReducer,
});

const mapDispatchToProps = dispatch =>
	bindActionCreators({ logoutUser, fetchContacts, addContact }, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Profile);
