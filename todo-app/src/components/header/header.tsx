import '../../styles/header.scss';
import { ReactComponent as MoonLogo } from '../../assets/images/icon-moon.svg';

const STYLE_BASE = 'HEADER_';

const Header = (): JSX.Element => {
	return (
		<section
			className={`${STYLE_BASE}todo_header_container`}
			data-testid='TODO_HEADER_CONTAINER'
		>
			<h1>TODO</h1>
			<MoonLogo />
		</section>
	);
};

export default Header;
