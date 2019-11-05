import { Component } from "react";
import { createPortal } from "react-dom";

const portalRoot = document.getElementById("portalRoot");

export default class Portal extends Component {
	constructor(props) {
		super(props);
		this.el = document.createElement("div");
	}

	componentDidMount() {
		portalRoot.appendChild(this.el);
	}

	componentWillUnmount() {
		portalRoot.removeChild(this.el);
	}

	render() {
		return createPortal(this.props.children, this.el);
	}
}
