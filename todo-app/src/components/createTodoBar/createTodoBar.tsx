import { ChangeEvent, FormEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useTodo } from 'context/context';
import '../../styles/createTodoBar.scss';

const STYLE_BASE = 'CREATE_TODO_BAR_';

const CreateTodoBar = (): JSX.Element => {
	const { addTodo } = useTodo();
	const [newTodo, setNewTodo] = useState('');

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setNewTodo(e.target.value);
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (newTodo !== '') {
			setNewTodo('');
			addTodo({ id: uuidv4(), value: newTodo, completed: false });
		}
	};

	return (
		<section
			className={`${STYLE_BASE}container`}
			data-testid='CREATE_TODO_BAR_CONTAINER'
		>
			<div className={`${STYLE_BASE}radio_btn_container`}>
				<div
					className={`${STYLE_BASE}radio_btn`}
					data-testid='CREATE_TODO_BAR_RADIO_BTN'
				></div>
			</div>
			<form onSubmit={handleSubmit} data-testid='CREATE_TODO_BAR_FORM'>
				<input
					type='text'
					placeholder='Create a todo...'
					data-testid='CREATE_TODO_BAR_INPUT'
					onChange={handleChange}
					value={newTodo}
				/>
			</form>
		</section>
	);
};

export default CreateTodoBar;
