import axios from "axios";
import uuid from "uuid/v4";

import { CHANGE_PHONE, CHANGE_CODE, LOGOUT_USER, FETCH_CONTACTS, ADD_CONTACT } from "./actionTypes";

export const changePhone = newPhone => ({ type: CHANGE_PHONE, newPhone });
export const changeCode = activationCodeUser => ({ type: CHANGE_CODE, activationCodeUser });
export const logoutUser = _ => ({ type: LOGOUT_USER });

export const fetchContacts = _ => {
	return dispatch => {
		return axios
			.get("https://reqres.in/api/users?per_page=10")
			.then(response => dispatch({ type: FETCH_CONTACTS, contacts: response.data.data }));
	};
};

export const addContact = async (first_name, last_name) => {
	return dispatch => {
		return axios
			.post("https://reqres.in/api/users", { id: uuid(), first_name, last_name })
			.then(response => dispatch({ type: ADD_CONTACT, response }));
	};
};
