import { LOGOUT_USER, FETCH_CONTACTS, ADD_CONTACT } from "../Actions/actionTypes";

const initialState = {
	firstName: "",
	lastName: "",
	id: "",
	notLoggedIn: false,
	contacts: [],
	phoneNumber: "",
};

export default (state = initialState, action) => {
	switch (action.type) {
		case ADD_CONTACT:
			return {
				...state,
				contacts: state.contacts.concat(action.contacts),
			};

		case FETCH_CONTACTS:
			return { ...state, contacts: action.contacts };

		case LOGOUT_USER:
			return {
				...state,
				notLoggedIn: true,
			};

		default:
			return state;
	}
};
