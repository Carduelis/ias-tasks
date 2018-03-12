import React, { Component } from 'react';

class Preview extends Component {
	render() {
		const { props } = this;
		return (
			<div className="preview">
				<div className="preview-image preview-image--mask" style={{backgroundImage: `url(${props.photo_url})`}}>
				</div>
					<div className="preview-image" style={{backgroundImage: `url(${props.photo_url})`}}>
					</div>
				<div className="preview-name">
				{props.name}
				</div>
			</div>
		);
	}
}

export { Preview };
