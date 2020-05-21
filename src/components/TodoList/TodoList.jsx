import React from 'react';
import styled from 'styled-components';
import TodoListItem from '../TodoListItem/TodoListItem';
import { useTodoState } from '../../context/Todocontext';

const TodoListBlock = styled.div`
	flex: 1;
	padding: 30px 32px;
	overflow-y: auto;
	background: #fbfcfc;
`;

const TodoList = () => {
	const todos = useTodoState();

	return (
		<TodoListBlock>
			{todos.map((todo) => (
				<TodoListItem
					key={todo.id}
					id={todo.id}
					text={todo.text}
					done={todo.done}
				/>
			))}
		</TodoListBlock>
	);
};

export default TodoList;
