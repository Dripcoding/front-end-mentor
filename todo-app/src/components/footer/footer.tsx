import '../../styles/footer.scss';

const STYLE_BASE = 'FOOTER_';

const Footer = (): JSX.Element => {
	return (
		<footer className={`${STYLE_BASE}container`} data-testid='FOOTER'>
			<p className={`${STYLE_BASE}text`}>Drag and drop to reorder list</p>
		</footer>
	);
};

export default Footer;
