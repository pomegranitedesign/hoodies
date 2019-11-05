import React from "react";
import { Switch, Route } from "react-router-dom";

import { Register, Confirm, Profile } from "../Components";

const Routes = props => {
	return (
		<Switch>
			<Route exact path="/" component={Register} />
			<Route path="/confirm" component={Confirm} />
			<Route path="/profile" component={Profile} />
		</Switch>
	);
};

export default Routes;
