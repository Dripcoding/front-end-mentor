import '../../styles/searchBar.scss';

const STYLE_BASE = 'SEARCH_BAR_';
const PENDING_MESSAGE = 'Currently typing';

const SearchBar = (): JSX.Element => {
	return (
		<section
			className={`${STYLE_BASE}container`}
			data-testid='SEARCH_BAR_CONTAINER'
		>
			<div className={`${STYLE_BASE}radio_btn_container`}>
				<div
					className={`${STYLE_BASE}radio_btn`}
					data-testid='SEARCH_BAR_RADIO_BTN'
				></div>
			</div>
			<input
				type='text'
				placeholder='Create a todo...'
				data-testid='SEARCH_BAR_INPUT'
			/>
		</section>
	);
};

export default SearchBar;
