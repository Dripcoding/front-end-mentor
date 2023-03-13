import Header from '../components/header/header';
import SearchBar from 'src/components/searchBar/searchBar';
import Todos from 'src/components/todos/todos';
import Footer from 'src/components/footer/footer';
import '../styles/app.scss';

const STYLE_BASE = 'APP_';

export const App = (): JSX.Element => {
	return (
		<main className={`${STYLE_BASE}container`}>
			<Header />
			<SearchBar />
			<Todos />
			<Footer />
		</main>
	);
};

export default App;
