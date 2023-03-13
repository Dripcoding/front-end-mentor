import '../../styles/todoControls.scss';

const STYLE_BASE = 'TODO_CONTROLS_';

const TodoControls = (): JSX.Element => {
	return (
		<section
			className={`${STYLE_BASE}container`}
			data-testid='TODO_CONTROLS_CONTAINER'
		>
			<span
				className={`${STYLE_BASE}counter_container`}
				data-testid='TODO_CONTROLS_COUNTER'
			>
				5 items left
			</span>
			<div
				className={`${STYLE_BASE}toggles_container`}
				data-testid='TODO_CONTROLS_TOGGLES'
			>
				<button data-testid='TODO_CONTROLS_ALL_BTN'>All</button>
				<button data-testid='TODO_CONTROLS_ACTIVE_BTN'>Active</button>
				<button data-testid='TODO_CONTROLS_COMPLETED_BTN'>Completed</button>
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
