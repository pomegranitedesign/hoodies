import { CHANGE_PHONE, CHANGE_CODE } from "../Actions/actionTypes";

const initialState = {
	countrySelector: "+7",
	phoneNumber: "",
	verificationCode: 654676,
	verificationCodeUser: 0,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_PHONE:
			return {
				...state,
				phoneNumber: action.newPhone,
			};

		case CHANGE_CODE:
			return {
				...state,
				verificationCodeUser: action.activationCodeUser,
			};

		default:
			return state;
	}
};
