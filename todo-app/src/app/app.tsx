import classNames from 'classnames';
import { TodoProvider } from '../context/todoContext';
import Header from '../components/header/header';
import CreateTodoBar from 'components/createTodoBar/createTodoBar';
import Todos from '../components/todos/todos';
import Footer from '../components/footer/footer';
import '../styles/app.scss';
import { useTheme } from 'context/themeContext';

const STYLE_BASE = 'APP_';

export const App = (): JSX.Element => {
	const { theme } = useTheme();

	return (
		<main
			className={classNames({
				[`${STYLE_BASE}container`]: true,
				[`${STYLE_BASE}dark_mode`]: theme === 'dark',
			})}
		>
			<Header />
			<TodoProvider>
				<CreateTodoBar />
				<Todos />
			</TodoProvider>
			<Footer />
		</main>
	);
};

export default App;
