import classnames from 'classnames';
import { TodoFilters } from 'components/todos/todos';
import React, { Dispatch, SetStateAction } from 'react';
import '../../styles/todoControls.scss';

const STYLE_BASE = 'TODO_CONTROLS_';

interface ITodoControlsProps {
	activeCount: number;
	changeFilter: Dispatch<SetStateAction<string>>;
	filter: string;
	clearCompleted: () => void;
}

const TodoControls = ({
	activeCount,
	changeFilter,
	filter,
	clearCompleted,
}: ITodoControlsProps): JSX.Element => {
	const handleFilter = (e: React.MouseEvent<HTMLButtonElement>) => {
		changeFilter(e.currentTarget.id);
	};

	const handleClearCompleted = (e: React.MouseEvent<HTMLButtonElement>) => {
		clearCompleted();
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
					className={classnames({
						[`${STYLE_BASE}activated`]: filter === TodoFilters.ALL,
					})}
					onClick={handleFilter}
					id='ALL'
					data-testid='TODO_CONTROLS_ALL_BTN'
				>
					All
				</button>
				<button
					className={classnames({
						[`${STYLE_BASE}activated`]: filter === TodoFilters.ACTIVE,
					})}
					onClick={handleFilter}
					id='ACTIVE'
					data-testid='TODO_CONTROLS_ACTIVE_BTN'
				>
					Active
				</button>
				<button
					className={classnames({
						[`${STYLE_BASE}activated`]: filter === TodoFilters.COMPLETED,
					})}
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
				onClick={handleClearCompleted}
			>
				Clear Completed
			</button>
		</section>
	);
};

export default TodoControls;
