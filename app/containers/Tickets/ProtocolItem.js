import React, { Component } from 'react';
import FaChain from 'react-icons/lib/fa/chain';
import FaChainBroken from 'react-icons/lib/fa/chain-broken';
import DueDate from './DueDate';
import PersonInCharge from './PersonInCharge';
import { Button } from '../../components/UI';

class ProtocolItem extends Component {
	render() {
		const { model } = this.props;
		const linkBtnProps = {
			handleClick: model.linkedBy ? () => unlink(model) : () => link(model),
			size: 'sm',
			// label: model.linkedBy ? 'Отвязать' : 'Связать',
			icon: model.linkedBy ? <FaChainBroken /> : <FaChain />
		};
		return (
			<div className="ticket">
				<div className="ticket-index">
					<span>
						{model.index}
					</span>
				</div>
				<div className="title">
					Пункт протокола #{model.index}
				</div>
				<div className="ticket-link">
					<Button {...linkBtnProps} />
				</div>

				<Button handleClick={() => model.remove()} label="Удалить" />

				<DueDate date={model.date} />
				<PersonInCharge>
					{model.personInCharge}
				</PersonInCharge>
			</div>
		);
	}
}

const unlink = model => {
	if (confirm('Вы уверены?')) {
		model.unlink();
	}
};
const link = model => {
	const answer = Number(prompt('Введите номер пункта, куда прикреплять'));
	if (isNaN(answer)) {
		alert('Введена не цифра');
	} else {
		if (answer === model.index) {
			alert('Пункт нельзя прикрепить самому к себе');
		} else if (model.availableTicketsIndexes.includes(answer)) {
			model.linkTo(answer);
		} else {
			alert('Нет пункта с таким номером');
		}
	}
};

export default ProtocolItem;
