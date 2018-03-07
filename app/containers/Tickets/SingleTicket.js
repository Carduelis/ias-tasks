import React, { Component } from 'react';
import { observer } from 'mobx-react';
import ProtocolItem from './ProtocolItem';
import ReportPart from './ReportPart';

@observer
class SindleTicket extends Component {
	render() {
		const { model } = this.props;
		return (
			<div className="single-ticket">
				<div className="ticket-holder">
					<ProtocolItem model={model} />
				</div>
				<div className="report-holder">
					<ReportPart model={model} />
				</div>
			</div>
		);
	}
}

export default SindleTicket;
