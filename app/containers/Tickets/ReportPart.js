import React, { Component } from 'react';
import FaSignOut from 'react-icons/lib/fa/sign-out';
import ReportFork from './ReportFork';
import { Button } from '../../components/UI';

class ReportPart extends Component {
	render() {
		const { model } = this.props;
		return (
			<div>
				<div className="ticket-reports">
					<ReportFork model={model} />
				</div>
				<div className="ticket-send">
					<Button
						handleClick={() => alert('Пока не работает')}
						icon={<FaSignOut />}
						label="Отправить в Министерство"
					/>
				</div>
			</div>
		);
	}
}
export default ReportPart;
