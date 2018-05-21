const initialState = {
        cards: [
            {id: 'Card1', title: 'Write Blog', description: 'Can AI make memes'},
            {id: 'Card2', title: 'Pay Rent', description: 'Transfer via NEFT'},
        ]
}

export default (state = initialState, action) => {
	switch (action.type) {
        case 'ADD_CARD':
			return {
				...state,
				cards: state.cards.push(action.payload)
	    };
	case 'REMOVE_CARD':
			return {
				...state,
				cards: state.cards.filter( o => o.id !== action.payload)
	    };  
	case 'CHANGE_TITLE':
			return {
				...state,
				cards: state.cards.description = action.payload
	    };  
	  default:
	}
	return state;
};