import classNames from 'classnames';
import { TodoProvider, useTodo } from '../context/context';
import Header from '../components/header/header';
import CreateTodoBar from 'components/createTodoBar/createTodoBar';
import Todos from '../components/todos/todos';
import Footer from '../components/footer/footer';
import '../styles/app.scss';

const STYLE_BASE = 'APP_';

export const App = (): JSX.Element => {
	// const { theme } = useTodo();

	return (
		<TodoProvider>
			<main
				className={classNames({
					[`${STYLE_BASE}container`]: true,
					// [`${STYLE_BASE}dark_mode`]: theme === 'dark',
				})}
			>
				<Header />
				<CreateTodoBar />
				<Todos />
				<Footer />
			</main>
		</TodoProvider>
	);
};

export default App;
