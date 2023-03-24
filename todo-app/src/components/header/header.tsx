import '../../styles/header.scss';
import { ReactComponent as MoonLogo } from '../../assets/images/icon-moon.svg';
import { ReactComponent as SunLogo } from '../../assets/images/icon-sun.svg';
import { useTheme } from 'context/themeContext';

const STYLE_BASE = 'HEADER_';

const Header = (): JSX.Element => {
	const { theme, changeTheme } = useTheme();

	const handleChangeTheme = () => {
		changeTheme();
	};

	const icon =
		theme === 'light' ? <MoonLogo role='img' /> : <SunLogo role='img' />;

	return (
		<section
			className={`${STYLE_BASE}todo_header_container`}
			data-testid='TODO_HEADER_CONTAINER'
		>
			<h1>TODO</h1>
			<button onClick={handleChangeTheme}>{icon}</button>
		</section>
	);
};

export default Header;
