import '../../styles/todoControls.scss';

const STYLE_BASE = 'TODO_CONTROLS_';

interface ITodoControlsProps {
	activeCount: number;
	changeFilter: React.Dispatch<React.SetStateAction<string>>;
}

const TodoControls = ({
	activeCount,
	changeFilter,
}: ITodoControlsProps): JSX.Element => {
	const handleFilter = (e: React.MouseEvent<HTMLButtonElement>) => {
		changeFilter(e.currentTarget.id);
	};

	return (
		<section
			className={`${STYLE_BASE}container`}
			data-testid='TODO_CONTROLS_CONTAINER'
		>
			<span
				className={`${STYLE_BASE}counter_container`}
				data-testid='TODO_CONTROLS_COUNTER'
			>
				{activeCount} items left
			</span>
			<div
				className={`${STYLE_BASE}toggles_container`}
				data-testid='TODO_CONTROLS_TOGGLES'
			>
				<button
					onClick={handleFilter}
					id='ALL'
					data-testid='TODO_CONTROLS_ALL_BTN'
				>
					All
				</button>
				<button
					onClick={handleFilter}
					id='ACTIVE'
					data-testid='TODO_CONTROLS_ACTIVE_BTN'
				>
					Active
				</button>
				<button
					onClick={handleFilter}
					id='COMPLETED'
					data-testid='TODO_CONTROLS_COMPLETED_BTN'
				>
					Completed
				</button>
			</div>
			<button
				className={`${STYLE_BASE}clear_button`}
				data-testid='TODO_CONTROLS_CLEAR'
			>
				Clear Completed
			</button>
		</section>
	);
};

export default TodoControls;
