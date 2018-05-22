export const addLane = (lane) => ({
	type: 'ADD_LANE',
	payload: lane
});

export const addCard = (card) => ({
	type: 'ADD_CARD',
	payload: card
});

export const removeCard = (id, i) => ({
	type: 'REMOVE_CARD',
	payload: {id, i}
});


export const removeLane = (lane) => ({
	type: 'REMOVE_LANE',
	payload: lane
});

export const changeCard = (id, head, text) => ({
	type: 'CHANGE_CARD',
	payload: {id, head, text}
});

