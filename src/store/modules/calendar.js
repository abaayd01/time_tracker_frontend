// initial state
// shape: [{ id, quantity }]
const state = {
	mode: 'viewing',
	targetCell: {
		row: null,
		col: null
	},
	targetLocation: {
		top: null,
		left: null
    },
    timeEntries: [] 
};

// getters
const getters = {
	getTargetLocation(state) {
		return state.targetLocation;
	},
	getMode(state) {
		return state.mode;
	}
};

// actions
const actions = {};

// mutations
const mutations = {
	setTargetCell(state, { row, col, cellRef }) {
		state.targetCell = {
			row,
			col
		};
	},
	setTargetLocation(state, { top, left }) {
		state.targetLocation = {
			top,
			left
		};
	},
	clearTargetCell(state) {
		state.targetCell = {
			row: null,
			col: null
		};
	},
	clearTargetLocation(state) {
		state.targetLocation = {
			top: null,
			left: null
		};
	},
	setMode(state, mode) {
		state.mode = mode;
	},
	addTimeEntryToCalendar(state, { start_cell }) {
		state.timeEntries.push({
			start_cell
		});
	}
};

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
};
