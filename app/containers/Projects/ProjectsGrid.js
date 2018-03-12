import React, { Component } from 'react';
import { Snippet } from '../Projects';

class ProjectsGrid extends Component {
	render() {
		const { props } = this;
		return (
			<div className="projects-grid">
				{
					props.projects.map(project => <Snippet key={project.id} {...project} />)
				}
			</div>
		);
	}
}

export { ProjectsGrid };
