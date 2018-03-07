import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Ticket from './Ticket';

@observer
class GroupedTicket extends Component {
	render() {
		const { model } = this.props;
		return (
			<div className="group-ticket">
				{model.tickets.map(ticketModel =>
					<Ticket key={ticketModel.id} model={ticketModel} />
				)}
			</div>
		);
	}
}

export default GroupedTicket;
