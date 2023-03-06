import '../../styles/header.scss';
import moonLogo from '../../assets/images/icon-moon.svg';

const STYLE_BASE = 'HEADER_';

const Header = (): JSX.Element => {
	return (
		<section
			className={`${STYLE_BASE}todo_header_container`}
			data-testid='TODO_HEADER_CONTAINER'
		>
			<h1>TODO</h1>
			<img width={20} height={20} src={moonLogo} alt='dark mode toggle' />
		</section>
	);
};

export default Header;
