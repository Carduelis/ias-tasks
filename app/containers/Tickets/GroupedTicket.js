import React, { Component } from 'react';
import { observer } from 'mobx-react';
import ProtocolItem from './ProtocolItem';
import ReportPart from './ReportPart';

@observer
class GroupedTicket extends Component {
	render() {
		const { model } = this.props;
		return (
			<div className="group-ticket">
				<div className="ticket-holder">
					{model.tickets.map(ticketModel =>
						<ProtocolItem key={ticketModel.id} model={ticketModel} />
					)}
				</div>
				<div className="report-holder">
					<ReportPart model={model} />
				</div>
			</div>
		);
	}
}

export default GroupedTicket;
