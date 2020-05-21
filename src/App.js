import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { TodoHead, TodoList } from './components';
import { TodoProvider } from './context/Todocontext';

const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
	}
	body {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100vw;
		height: 100vh;
		background: rgb(172, 172, 224);
		background: linear-gradient(
			90deg,
			rgba(172, 172, 224, 1) 0%,
			rgba(233, 232, 245, 1) 100%
		);
	}
`;

const TodoBlock = styled.div`
	display: flex;
	flex-direction: column;
	width: 500px;
	height: 700px;
	border-radius: 15px;
	box-shadow: 0 0 19px 0 rgba(0, 0, 0, 0.25);
	overflow: hidden;
	background: #f8f9fa;
`;

const App = () => {
	return (
		<TodoProvider>
			<GlobalStyle />
			<TodoBlock>
				<TodoHead />
				<TodoList />
			</TodoBlock>
		</TodoProvider>
	);
};

export default App;
