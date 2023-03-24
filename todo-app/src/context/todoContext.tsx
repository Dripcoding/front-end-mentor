import {
	createContext,
	useState,
	useMemo,
	useCallback,
	useContext,
} from 'react';
import { v4 as uuidv4 } from 'uuid';

export interface ITodoItem {
	id: string;
	value: string;
	completed: boolean;
}

export interface ITodoState {
	todos: ITodoItem[];
	addTodo: (newTodo: ITodoItem) => void;
	completeTodo: (id: string) => void;
	updateTodos: (todos: ITodoItem[]) => void;
	clearCompleted: () => void;
}

const initialState = {
	todos: [
		{
			id: uuidv4(),
			value: 'Complete online JavaScript course',
			completed: true,
		},
		{ id: uuidv4(), value: 'Jog around the park 3x', completed: false },
		{ id: uuidv4(), value: '10 minutes meditation', completed: false },
		{ id: uuidv4(), value: 'Read for 1 hour', completed: false },
		{ id: uuidv4(), value: 'Pick up groceries', completed: false },
		{
			id: uuidv4(),
			value: 'Complete Todo App on Frontend Mentor',
			completed: false,
		},
	],
	addTodo: (newTodo: ITodoItem) => {
		return;
	},
	completeTodo: (id: string) => {
		return;
	},
	updateTodos: (todos: ITodoItem[]) => {
		return;
	},
	clearCompleted: () => {
		return;
	},
	changeTheme: () => {
		return;
	},
};

type TContext = ITodoState | undefined;

const TodoContext = createContext<TContext>(undefined);

export const useTodo = () => {
	const context = useContext(TodoContext);
	if (context === undefined) {
		throw new Error('useTodo must be used within a TodoProvider');
	}
	return context;
};

export const TodoProvider = ({ children }): JSX.Element => {
	const [todos, setTodos] = useState(initialState.todos);

	const addTodo = useCallback(
		(newTodo: ITodoItem) => {
			setTodos((prev: ITodoItem[]) => {
				return [...prev, newTodo];
			});
		},
		[setTodos]
	);

	const completeTodo = useCallback(
		(id: string) => {
			setTodos((prev: ITodoItem[]) => {
				return prev.map((todo) => {
					if (todo.id === id) {
						todo.completed = true;
					}
					return todo;
				});
			});
		},
		[setTodos]
	);

	const updateTodos = useCallback(
		(todos: ITodoItem[]) => {
			setTodos(todos);
		},
		[setTodos]
	);

	const clearCompleted = useCallback(() => {
		setTodos((prev: ITodoItem[]) => {
			return prev.filter((todo) => !todo.completed);
		});
	}, [setTodos]);

	const values = useMemo(
		() => ({
			todos,
			addTodo,
			completeTodo,
			updateTodos,
			clearCompleted,
		}),
		[todos, addTodo, completeTodo, updateTodos, clearCompleted]
	);

	return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};
