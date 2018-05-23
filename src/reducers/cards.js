import update from 'immutability-helper';

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
			
		},
		{
		  id: 1,
		  title: 'Completed',
		  cards: 
		  	[
				{id: 0, title: 'Write Blog', description: 'Can AI make memes'},
				{id: 1, title: 'Pay Rent', description: 'Transfer via NEFT'},],
			
		},
		{
			id: 2,
			title: 'Completed',
			cards: 
				[
				  {id: 0, title: 'Write Blog', description: 'Can AI make memes'},
				  {id: 1, title: 'Pay Rent', description: 'Transfer via NEFT'},],
			
		},
		
		
	  ],

}

export default (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_LANE':
			return {
				...state,
				lanes: [...state.lanes,action.payload],
				
		};
		case 'ADD_CARD':
		console.log(action.payload );
		let num = action.payload.laneId;
		return {
			...state,
			lanes: update(state.lanes,{
				[num]:{cards:{$push: [{id:action.payload.cardId,
										title: action.payload.head,
										description: action.payload.task}] }}
			})
		};
		case 'REMOVE_CARD':
		//console.log('remove_card',state.lanes.filter( o => o.id !== action.payload.id))
		let arr = state.lanes[action.payload.id].cards.filter( o => o.id !== action.payload.i);
		let index = action.payload.id;
				return {
					...state,
					lanes: update(state.lanes,{
						[index]:{cards:{$set: arr}}
					})
					
			};  
		case 'REMOVE_LANE':
				return {
					...state,
					lanes:state.lanes.filter( o => o.id !== action.payload),
				};  
		case 'CHANGE_CARD':
			console.log(state.lanes[action.payload.laneId].cards[action.payload.id].title = action.payload.head);
			console.log(state.lanes[action.payload.laneId].cards[action.payload.id].description = action.payload.text);
			let indexLan = action.payload.laneId;
			let indexCard = action.payload.id;

				return {
					...state,
					lanes: update(state.lanes,{
						[indexLan]:{cards:{indexCard:{$set: {id:indexCard,
															title: action.payload.head,
															description: action.payload.text}}}}
					})
				};  
		case 'CHANGE_NAME_LANE':
				console.log(action.payload)
				return{
					...state,
					lanes: update(state.lanes,{
						[action.payload.laneId]: { title: {$set: [action.payload.head] } }
					})
				}
			default:
		}
		return state;
};