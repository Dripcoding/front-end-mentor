import '../../styles/todoControls.scss';

const STYLE_BASE = 'TODO_CONTROLS_';

const TodoControls = (): JSX.Element => {
	return (
		<section
			className={`${STYLE_BASE}container`}
			data-testid='TODO_CONTROLS_CONTAINER'
		>
			<span data-testid='TODO_CONTROLS_COUNTER'>5 items left</span>
			<div data-testid='TODO_CONTROLS_TOGGLES'></div>
			<div data-testid='TODO_CONTROLS_CLEAR'></div>
		</section>
	);
};

export default TodoControls;
