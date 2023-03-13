import TodoControls from '../todoControls/todoControls';
import '../../styles/todos.scss';

const STYLE_BASE = 'TODOS_';

const Todos = (): JSX.Element => {
	const todos = [
		{ id: 1, value: 'walk dog' },
		{ id: 2, value: 'do homework' },
	];
	return (
		<section className={`${STYLE_BASE}container`} data-testid='TODOS_CONTAINER'>
			{todos.map((todo, idx) => {
				return <div>{todo.value}</div>;
			})}
			<TodoControls />
		</section>
	);
};

export default Todos;
