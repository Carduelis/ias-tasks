import { types } from 'mobx-state-tree';

const Todo = types
	.model({
		name: '',
		done: false
	})
	.actions(self => {
		function setName(newName) {
			self.name = newName;
		}

		function toggle() {
			self.done = !self.done;
		}

		return { setName, toggle };
	});
const User = types
	.model({
		name: ''
	})
	.actions(self => {
		function setName(newName) {
			self.name = newName;
		}
		return { setName };
	});

export { Todo, User };
