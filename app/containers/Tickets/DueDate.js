import React, { Component } from 'react';

class DueDate extends Component {
	render() {
		const { props } = this;
		if (!props.date) {
			return false;
		}
		return (
			<div className="due-date">
				К исполнению до <span>{props.date}</span>
			</div>
		);
	}
}

export default DueDate;
