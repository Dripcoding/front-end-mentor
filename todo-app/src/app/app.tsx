import { TodoProvider } from '../context/context';
import Header from '../components/header/header';
import CreateTodoBar from 'components/createTodoBar/createTodoBar';
import Todos from '../components/todos/todos';
import Footer from '../components/footer/footer';
import '../styles/app.scss';

const STYLE_BASE = 'APP_';

export const App = (): JSX.Element => {
	return (
		<TodoProvider>
			<main className={`${STYLE_BASE}container`}>
				<Header />
				<CreateTodoBar />
				<Todos />
				<Footer />
			</main>
		</TodoProvider>
	);
};

export default App;
