const initialState = {
	lanes: [
		{
		  id: 0,
		  title: 'Planned Tasks',
		  cards:
		   [
			   	{id: 0, title: 'Write Blog', description: 'Can AI make memes'},
				{id: 1, title: 'Pay Rent', description: 'Transfer via NEFT'},
				{id: 2, title: 'Pay Rent', description: 'Transfer via NEFT'},],
			add: true
		},
		{
		  id: 1,
		  title: 'Completed',
		  cards: 
		  	[
				{id: 0, title: 'Write Blog', description: 'Can AI make memes'},
				  {id: 1, title: 'Pay Rent', description: 'Transfer via NEFT'},],
			add: true
		},
		{
			id: 2,
			title: 'Completed',
			cards: 
				[
				  {id: 0, title: 'Write Blog', description: 'Can AI make memes'},
				  {id: 1, title: 'Pay Rent', description: 'Transfer via NEFT'},],
			add: true
		},
		
		
	  ],

}

export default (state = initialState, action) => {
	
	switch (action.type) {
		case 'ADD_LANE':
			return {
				...state,
				lanes: [...state.lanes,action.payload],
				add: false
		};
	case 'REMOVE_CARD':
	console.log(state.lanes[action.payload.id].cards.filter( o => o.id !== action.payload.i))
	console.log(state.lanes.filter( o => o.id !== action.payload.id))
			return {
				...state,
				lanes: [state.lanes.filter( o => o.id !== action.payload.id),
					state.lanes[action.payload.id].cards.filter( o => o.id !== action.payload.i)]
		};  
	case 'REMOVE_LANE':
			return {
				...state,
				lanes: state.lanes.filter( o => o.id !== action.payload),
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