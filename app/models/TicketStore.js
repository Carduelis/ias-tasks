import { types } from 'mobx-state-tree';
import { TicketModel } from './TicketModel';
import { uniqId } from '../helpers';

export const TicketStore = types
	.model('TicketStore', {
		tickets: types.array(TicketModel)
	})
	.views(self => ({
		get total() {
			return self.tickets.length;
		},
		getTotal(key) {
			return self.tickets.filter(ticket => ticket.lifecycle === key).length;
		},
		get maxIndex() {
			return self.tickets.length === 0
				? 0
				: Math.max(...self.tickets.map(t => t.index));
		}
	}))
	.actions(self => {
		function addTicket(title) {
			if (self.maxIndex === 10) {
				alert('Достигнут максимум');
				return false;
			}
			self.tickets.push({
				id: uniqId(),
				title,
				lifecycle: 'created',
				index: 1 + self.maxIndex
			});
		}
		return {
			addTicket
		};
	});
