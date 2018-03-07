import React, { Component } from 'react';
import { observer } from 'mobx-react';
import SingleTicket from './SingleTicket';
import GroupedTicket from './GroupedTicket';
import { Message, Label } from '../../components/UI';

@observer
class TicketsList extends Component {
	render() {
		const { ticketStore } = this.props;
		const { tickets, sortedTicketsAndGroups } = ticketStore;
		console.log(tickets);
		if (tickets.length === 0) {
			return <Message type="info" text="Нет задач" />;
		}
		return (
			<div className="tickets">
				<div className="labels-bar">
					<Label label="Всего" value={ticketStore.total} />
					<Label label="Готово" value={ticketStore.getTotal('done')} />
					<Label label="В работе" value={ticketStore.getTotal('underway')} />
				</div>
				<div className="tickets-list">
					{sortedTicketsAndGroups.map(ticket => {
						if (ticket.$treenode.type.name === 'Ticket') {
							return <SingleTicket key={ticket.id} model={ticket} />;
						} else {
							return <GroupedTicket key={ticket.id} model={ticket} />;
						}
					})}
				</div>
			</div>
		);
	}
}

export default TicketsList;
