import React, { Component } from 'react';
import { Preview } from '../Projects';

class Snippet extends Component {
	render() {
		const { props } = this;
		return (
			<div className="project-snippet">
				<Preview {...props} />
				<div className="project-description">
				{props.description}
				</div>
			</div>
		);
	}
}

export { Snippet };
