import React, { Component } from 'react';
import { Message } from '../../components/UI';

class PersonInCharge extends Component {
	render() {
		const { children } = this.props;
		if (children) {
			return (
				<div className="person-in-charge">
					{children}
				</div>
			);
		} else {
			return <Message type="error" text="Нет исполнителя" />;
		}
	}
}

export default PersonInCharge;
