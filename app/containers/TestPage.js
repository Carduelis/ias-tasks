import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Header from './Header';
import Page from './Page';
import Content from './Content';
import TicketsList from './Tickets/TicketsList';
import Button from '../components/Button';

@inject('store')
@observer
class TestPage extends Component {
	render() {
		const { store } = this.props;
		const { ticketStore, bookStore } = store;
		console.log(bookStore.shop);
		console.log(bookStore.sortedAvailableBooks);
		console.log(ticketStore);
		const btnProps = {
			label: 'add',
			handleClick: () => {
				ticketStore.addTicket('kek');
			}
		};
		return (
			<Page>
				<Header />
				<Content>
					<Button {...btnProps} />
					<TicketsList ticketStore={ticketStore} />
				</Content>
			</Page>
		);
	}
}

export default TestPage;
