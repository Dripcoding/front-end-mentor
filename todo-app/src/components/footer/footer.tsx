import classNames from 'classnames';
import { useTheme } from 'context/themeContext';
import '../../styles/footer.scss';

const STYLE_BASE = 'FOOTER_';

const Footer = (): JSX.Element => {
	const { theme } = useTheme();

	return (
		<footer className={`${STYLE_BASE}container`} data-testid='FOOTER'>
			<p
				className={classNames({
					[`${STYLE_BASE}text`]: true,
					[`${STYLE_BASE}dark_mode`]: theme === 'dark',
				})}
			>
				Drag and drop to reorder list
			</p>
		</footer>
	);
};

export default Footer;
