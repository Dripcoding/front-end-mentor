import Header from '../components/header/header';
import SearchBar from 'src/components/searchBar/searchBar';
import '../styles/app.scss';

const STYLE_BASE = 'APP_';

export const App = (): JSX.Element => {
	return (
		<main className={`${STYLE_BASE}container`}>
			<Header />
			<SearchBar />
		</main>
	);
};

export default App;
