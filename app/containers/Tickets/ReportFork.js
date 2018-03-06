import React, { Component } from 'react';
import { Message, Button } from '../../components/UI';
import Report from '../Reports';

class ReportFork extends Component {
	render() {
		const { model } = this.props;
		const { reports, lastReport } = model;
		if (lastReport) {
			return (
				<div>
					{reports.length > 1 &&
						<Button
							label="Предыдущие ответы"
							handleClick={() => alert('Пока не доступно')}
						/>}
					<Report model={lastReport} />
					<Button
						label="Прикрепить файл"
						handleClick={() => alert('Пока не доступно')}
					/>
				</div>
			);
		} else {
			return (
				<div>
					<Message type="info" text="Нет истории файлов" />
					<Button
						label="Прикрепить файл"
						handleClick={() => alert('Пока не доступно')}
					/>
				</div>
			);
		}
	}
}

export default ReportFork;
