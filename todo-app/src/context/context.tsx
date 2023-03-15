import React, { createContext, useState } from 'react';

export interface ITodoItem {
	id: number;
	value: string;
}

export interface ITodoState {
	todos: ITodoItem[];
	theme: string;
}

const initialState = {
	todos: [
		{ id: 1, value: 'finish homework' },
		{ id: 2, value: 'walk dog' },
	],
	theme: 'light',
};

export const TodoContext = createContext<ITodoState>(initialState);

export const TodoProvider = ({
	children,
}: {
	children: React.ReactNode;
}): JSX.Element => {
	const [todos, setTodos] = useState(initialState.todos);
	const [theme, setTheme] = useState(initialState.theme);

	return (
		<TodoContext.Provider value={{ todos, theme }}>
			{children}
		</TodoContext.Provider>
	);
};
