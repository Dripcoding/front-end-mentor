import '../../styles/header.scss';
import { ReactComponent as MoonLogo } from '../../assets/images/icon-moon.svg';
import { useTodo } from 'context/context';

const STYLE_BASE = 'HEADER_';

const Header = (): JSX.Element => {
	const { changeTheme } = useTodo();

	const handleChangeTheme = () => {
		changeTheme();
	};

	return (
		<section
			className={`${STYLE_BASE}todo_header_container`}
			data-testid='TODO_HEADER_CONTAINER'
		>
			<h1>TODO</h1>
			<div onClick={handleChangeTheme}>
				<MoonLogo role='img' />
			</div>
		</section>
	);
};

export default Header;
