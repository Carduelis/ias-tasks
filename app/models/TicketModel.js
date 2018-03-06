import { types, getParent } from 'mobx-state-tree';
import { ReportModel } from './ReportModel';
import { state, ticketLifecycle } from './Types';

export const TicketModel = types
	.model('Ticket', {
		id: types.identifier(),
		index: types.number,
		order: types.maybe(types.number),
		title: types.string,
		state,
		// linkedTo: types.maybe(types.array(types.reference(TicketModel))),
		// linkedBy: types.maybe(types.reference(TicketModel)),
		lifecycle: ticketLifecycle,
		reports: types.maybe(types.reference(ReportModel))
	})
	.views(self => ({
		get ticketStore() {
			return getParent();
		},
		get idLength() {
			return self.id.length;
		}
	}))
	.actions(self => {
		function rename(title) {
			self.title = title;
		}
		function afterCreate(...rest) {
			console.log('Ticket has been created', self);
			console.log(...rest);
		}
		function beforeDestroy(...rest) {
			console.log('Ticket has been destroyed', self);
			console.log(...rest);
		}
		return {
			rename,
			beforeDestroy,
			afterCreate
		};
	});
