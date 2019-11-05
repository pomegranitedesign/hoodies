import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import Routes from "./Misc/Routes";
import store from "./Misc/store";
import "./index.scss";
import * as serviceWorker from "./Misc/serviceWorker";

// store.subscribe(_ => {
// 	console.log(store.getState());
// });

render(
	<Provider store={store}>
		<Router>
			<Routes />
		</Router>
	</Provider>,
	document.getElementById("root"),
);

serviceWorker.unregister();
