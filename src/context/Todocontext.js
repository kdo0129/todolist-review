import React, { useReducer, createContext, useContext, useRef } from 'react';

const initialTodos = [
	{
		id: 1,
		text: '리엑트 기초 공부',
		done: true,
	},
	{
		id: 2,
		text: '프로젝트 구성하기',
		done: true,
	},
	{
		id: 3,
		text: '컴포넌트 스타일링하기',
		done: false,
	},
	{
		id: 4,
		text: '컨텍스트 만들기',
		done: false,
	},
];

const todoReducer = (state, action) => {
	switch (action.type) {
		case 'CREATE':
			return state.concat(action.todo);
		case 'TOGGLE':
			return state.map((todo) =>
				todo.id === action.id ? { ...todo, done: !todo.done } : todo,
			);
		case 'REMOVE':
			return state.filter((todo) => todo.id !== action.id);
		default:
			throw new Error(`Unhandled action !`);
	}
};

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

export const TodoProvider = ({ children }) => {
	const [state, dispatch] = useReducer(todoReducer, initialTodos);
	const nextId = useRef(5);

	return (
		<TodoStateContext.Provider value={state}>
			<TodoDispatchContext.Provider value={dispatch}>
				<TodoNextIdContext.Provider value={nextId}>
					{children}
				</TodoNextIdContext.Provider>
			</TodoDispatchContext.Provider>
		</TodoStateContext.Provider>
	);
};

export const useTodoState = () => {
	const context = useContext(TodoStateContext);
	if (!context) {
		throw new Error('Can not find TodoStateContext.');
	}
	return context;
};

export const useTodoDispatch = () => {
	const context = useContext(TodoDispatchContext);
	if (!context) {
		throw new Error('Can not find TodoDispatchContext.');
	}
	return context;
};
export const useTodoNextId = () => {
	const context = useContext(TodoNextIdContext);
	if (!context) {
		throw new Error('Can not find TodoNextIdContext.');
	}
	return context;
};
