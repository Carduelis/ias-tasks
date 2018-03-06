import { types, getParent } from 'mobx-state-tree';
import { TicketModel } from './TicketModel';

console.log(TicketModel);
export const TicketGroupModel = types
	.model('TicketGroup', {
		id: types.identifier(),
		tickets: types.array(types.reference(types.late(() => TicketModel)))
	})
	.views(self => ({
		get ticketStore() {
			return getParent(self);
		},
		get index() {
			return Math.min(...self.tickets.map(item => item.index));
		}
	}))
	.actions(self => {
		function afterCreate(...rest) {
			console.log('TicketGroup has been created', self);
			console.log(...rest);
		}
		function beforeDestroy(...rest) {
			console.log('TicketGroup has been destroyed', self);
			console.log(...rest);
		}
		function addTicket(ticketModel) {
			self.tickets.push(ticketModel.id);
		}
		return {
			addTicket,
			beforeDestroy,
			afterCreate
		};
	});
