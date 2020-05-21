import React, { useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';
import { useTodoDispatch, useTodoNextId } from '../../context/Todocontext';

const TodoCreateButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	right: 40px;
	bottom: 0;
	transform: translate(0, 50%);
	width: 50px;
	height: 50px;
	background: #e96f6c;
	&:hover {
		background: #fe918d;
	}
	&:active {
		background: #e78e8b;
	}
	font-size: 30px;
	border-radius: 50%;
	border: none;
	color: #fdf3f3;
	cursor: pointer;
	z-index: 9;
	transition: 0.2s all ease-out;
	${(props) =>
		props.openInput &&
		css`
			background: #55bd9e;
			&:hover {
				background: #63d1b0;
			}
			&:active {
				background: #479e84;
			}
			transform: translate(0, 50%) rotate(45deg);
		`}
`;

const InsertFormPositioner = styled.div`
	overflow: hidden;
	transition: 0.2s all ease-out;
	height: 0;
	${(props) =>
		props.openInput &&
		css`
			margin: 20px 0px 10px;
			height: 100px;
		`};
`;

const InsertForm = styled.form`
	display: block;
	background: #f1f3f5;
	padding: 32px;
	border-radius: 4px;
	box-sizing: border-box;
`;

const Input = styled.input`
	display: block;
	width: 100%;
	padding: 12px;
	border-radius: 4px;
	border: 1px solid #dee2e6;
	outline: none;
	box-sizing: border-box;
`;

const TodoCreate = () => {
	const dispatch = useTodoDispatch();
	const nextId = useTodoNextId();
	const refInput = useRef(null);

	const [openInput, setOpenInput] = useState(false);
	const [value, setValue] = useState('');
	const onToggle = () => {
		setOpenInput(!openInput);
		refInput.current.focus();
	};
	const onChange = (e) => setValue(e.target.value);
	const onSubmit = (e) => {
		e.preventDefault();
		dispatch({
			type: 'CREATE',
			todo: {
				id: nextId.current,
				text: value,
				done: false,
			},
		});
		setValue('');
		setOpenInput(false);
		nextId.current += 1;
	};

	return (
		<>
			<InsertFormPositioner openInput={openInput}>
				<InsertForm onSubmit={onSubmit}>
					<Input
						onChange={onChange}
						value={value}
						placeholder="할 일을 입력 후, Enter 를 누르세요"
						ref={refInput}
					/>
				</InsertForm>
			</InsertFormPositioner>
			<TodoCreateButton openInput={openInput} onClick={onToggle}>
				<MdAdd />
			</TodoCreateButton>
		</>
	);
};

export default TodoCreate;
