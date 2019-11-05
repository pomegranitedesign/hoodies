/**
 *
 * @EditContent -> HOC, который даёт возможность редактировать имя прямо на странице в профиле
 *
 *
 */
import React, { Component } from "react";

const withEditContent = WrappedComponent => {
	return class extends Component {
		state = { editing: false };

		toggleEdit = e => {
			e.stopPropagation();

			if (this.state.editing) {
				this.cancel();
			} else {
				this.edit();
			}
		};

		edit = _ => {
			this.setState({ editing: true }, _ => this.domEl.focus());
		};

		save = _ => {
			this.setState({ editing: false }, _ => {
				if (this.props.onSave && this.isValueChanged()) {
					console.log(`Value is changed ${this.domEl.textContent}`);
				}
			});
		};

		cancel = _ => this.setState({ editing: false });

		isValueChanged = _ => this.props.value !== this.domEl.textContent;

		handleKeyDown = e => {
			const { key } = e;

			switch (key) {
				case "Enter":
				case "Escape":
					this.save();
					break;

				default:
					return null;
			}
		};

		render() {
			let editOnClick = true;
			const { editing } = this.state;

			if (this.props.editOnClick !== undefined) {
				editOnClick = this.props.editOnClick;
			}

			return (
				<WrappedComponent
					className={editing ? "editing" : ""}
					onClick={editOnClick ? this.toggleEdit : undefined}
					contentEditable={editing}
					ref={domNode => (this.domEl = domNode)}
					onBlur={this.save}
					onKeyDown={this.handleKeyDown}
					{...this.props}>
					{this.props.name}
				</WrappedComponent>
			);
		}
	};
};

export default withEditContent;
