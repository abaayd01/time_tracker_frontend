// initial state
// shape: [{ id, quantity }]
const state = {
	mode: 'viewing',
	targetLocation: {
		top: null,
		left: null
	}
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
	setTargetLocation(state, { top, left }) {
		state.targetLocation = {
			top,
			left
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
	}
};

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
};
