export const addCard = (card) => ({
	type: 'ADD_CARD',
	payload: card
});

export const removeCard = (card) => ({
	type: 'REMOVE_CARD',
	payload: card
});

export const changeTitle = (input) => ({
	type: 'CHANGE_TITLE',
	payload: input
});


