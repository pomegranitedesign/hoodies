import React, { Fragment } from "react";

import Title from "./Title";
import Input from "./Input/Input";

const Register = ({ history }) => {
	return (
		<Fragment>
			<Title titleType="heading" text="Sign In / Register" />
			<Input inputType="phone" history={history} />
			<Title titleType="placeholder" text="Enter phone number to sign in or register" />
		</Fragment>
	);
};

export default Register;
