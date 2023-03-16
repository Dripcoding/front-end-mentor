import React, { createContext, useState, useMemo, useCallback } from 'react';

export interface ITodoItem {
	id: number;
	value: string;
}

export interface ITodoState {
	todos: ITodoItem[];
	theme: string;
	updateTodos: (todos: ITodoItem[]) => void;
	changeTheme: (theme: string) => void;
}

const initialState: ITodoState = {
	todos: [
		{ id: 1, value: 'finish homework' },
		{ id: 2, value: 'walk dog' },
	],
	theme: 'light',
	updateTodos: (todos) => {
		return;
	},
	changeTheme: (theme) => {
		return;
	},
};

export const TodoContext = createContext(initialState);

export const TodoProvider = ({
	children,
}: {
	children: React.ReactNode;
}): JSX.Element => {
	const [todos, setTodos] = useState(initialState.todos);
	const [theme, setTheme] = useState(initialState.theme);

	const updateTodos = useCallback(
		(todos: ITodoItem[]) => {
			setTodos(todos);
		},
		[setTodos]
	);

	const changeTheme = useCallback(
		(theme: string) => {
			setTheme(theme);
		},
		[setTheme]
	);

	const values = useMemo(
		() => ({ todos, theme, updateTodos, changeTheme }),
		[todos, theme, updateTodos, changeTheme]
	);

	return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};
