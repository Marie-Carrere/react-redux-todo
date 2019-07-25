import {
	ADD_TODO,
	DELETE_TODO,
	EDIT_TODO,
	COMPLETE_TODO,
	COMPLETE_ALL_TODOS,
	CLEAR_COMPLETED,
} from '../constants/ActionTypes'

const initialState = [{
	text: 'Workout - leg day 🏋🏽‍♀️',
	completed: false,
	id: 5
}]

const todos = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TODO:
				return [
					...state, 
					{
						id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
						completed: false,
						text: action.text,
					}
				]
		case DELETE_TODO:
				return state.filter((user) => user.id !== action.id)
		case EDIT_TODO:
				return state.map((todo) => {
					return todo.id === action.id ? {
						...todo, 
						text: action.text,
					} : todo
				})
		case COMPLETE_TODO:
			return state.map((todo) => {
				return todo.completed === action.completed ? {
					...todo,
					completed: action.completed
				} : todo
			})

		case COMPLETE_ALL_TODOS: {
			const areAllMarked = state.every((todo) => todo.completed)
			
			return state.map((todo) => ({
					...todo,
					completed: !areAllMarked,
			}))
		}
		case CLEAR_COMPLETED:
				return state.filter((todo) => todo.completed === false)
		default:
			return state
	}
}

export default todos
