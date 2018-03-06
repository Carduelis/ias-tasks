import React, { Component } from 'react';
import { observer } from 'mobx-react';
import DueDate from './DueDate';
import PersonInCharge from './PersonInCharge';

@observer
class Ticket extends Component {
	render() {
		const { model } = this.props;
		console.log(model);
		return (
			<div className="ticket">
				<div className="title">
					<h3>
						Пункт протокола #{model.index}
					</h3>
				</div>
				<div className="">
					{model.idLength}/{model.id}
				</div>
				<DueDate date={model.date} />
				<PersonInCharge>
					{model.personInCharge}
				</PersonInCharge>
			</div>
		);
	}
}

export default Ticket;
