const { createStore } = Redux

const store = createStore(myReducer);

function myReducer (state = initState, action){
	if (action.type == 'ADD_TODO'){
		return{
			todos : [...state.todos, action.todo]
		}
	}
}

const initState ={
	todos : [],
	posts : []
}



const todoAction = { type : 'ADD_TODO' , todo : 'buy some milk'};



store.dispatch(todoAction)