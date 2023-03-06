import Header from '../components/header/header';
import '../styles/app.scss';

const STYLE_BASE = 'APP_';

export const App = (): JSX.Element => {
	return (
		<main className={`${STYLE_BASE}container`}>
			<Header />
		</main>
	);
};

export default App;
