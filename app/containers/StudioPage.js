import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Header from './Header';
import Page from './Page';
import Content from './Content';
import { ProjectsGrid} from './Projects/ProjectsGrid';
import Button from '../components/Button';

@inject('store')
@observer
class StudioPage extends Component {
	render() {
		const { store } = this.props;
		const { ticketStore, studioStore } = store;
		console.log(studioStore.shop);
		console.log(studioStore.sortedAvailableBooks);
		console.log(ticketStore);
		const btnProps = {
			label: 'add',
			handleClick: () => {
				studioStore.addProject({
					name: 'Project name'
				});
			}
		};
		const projects = studioStore.sortedProjects;
		return (
			<Page>
				<Header />
				<Content>
					<Button {...btnProps} />
					<ProjectsGrid projects={projects} />
				</Content>
			</Page>
		);
	}
}

export default StudioPage;
