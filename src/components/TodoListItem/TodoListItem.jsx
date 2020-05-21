import React from 'react';
import styled, { css } from 'styled-components';
import { MdCheckBoxOutlineBlank, MdCheckBox, MdDelete } from 'react-icons/md';
import { useTodoDispatch } from '../../context/Todocontext';

const Remove = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	color: #dee2e6;
	font-size: 20px;
	cursor: pointer;
	&:hover {
		color: #ff6b6b;
	}
	display: none;
`;

const TodoItemBlock = styled.div`
	display: flex;
	align-items: center;
	padding-top: 20px;
	padding-bottom: 20px;
	&:hover {
		${Remove} {
			display: initial;
		}
	}
`;

const Text = styled.div`
	flex: 1;
	font-size: 23px;
	color: #495057;
	${(props) =>
		props.done &&
		css`
			color: #ced4da;
			text-decoration: line-through;
		`}
`;

const CheckIcon = styled.div`
	width: 30px;
	border-radius: 16px;
	border: none;
	font-size: 23px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 20px;
	cursor: pointer;
	color: #ea7572;
	${(props) =>
		props.done ||
		css`
			color: #adb5bd;
		`}
`;

const TodoListItem = ({ id, text, done }) => {
	const dispatch = useTodoDispatch();
	const onToggle = () =>
		dispatch({
			type: 'TOGGLE',
			id,
		});
	const onRemove = () =>
		dispatch({
			type: 'REMOVE',
			id,
		});
	return (
		<>
			<TodoItemBlock>
				<CheckIcon onClick={onToggle} done={done}>
					{done ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
				</CheckIcon>
				<Text>{text}}</Text>
				<Remove onClick={onRemove}>
					<MdDelete />
				</Remove>
			</TodoItemBlock>
		</>
	);
};

export default TodoListItem;
