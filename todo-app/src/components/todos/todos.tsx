import TodoControls from '../todoControls/todoControls';
import '../../styles/todos.scss';

const STYLE_BASE = 'TODOS_';

const Todos = (): JSX.Element => {
	// todo - define state

	// todo - define todo actions

	return (
		<section className={`${STYLE_BASE}container`} data-testid='TODOS_CONTAINER'>
			<TodoControls />
		</section>
	);
};

export default Todos;
