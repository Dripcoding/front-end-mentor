import classNames from 'classnames';
import { CSS } from '@dnd-kit/utilities';
import { useSortable } from '@dnd-kit/sortable';
import { ITodoItem } from 'context/todoContext';
import { ReactComponent as IconCheck } from '../../assets/images/icon-check.svg';
import '../../styles/todoItem.scss';

const STYLE_BASE = 'TODO_ITEM_';

interface ITodoItemProps {
	todo: ITodoItem;
	key: string;
	completeTodo: (id: string) => void;
	theme: string;
}

const TodoItem = ({
	todo,
	completeTodo,
	theme,
}: ITodoItemProps): JSX.Element => {
	const {
		attributes,
		isDragging,
		listeners,
		setNodeRef,
		transform,
		transition,
	} = useSortable({ id: todo.id });
	const style = {
		transform: CSS.Transform.toString(transform),
		transition,
		opacity: isDragging ? 0.5 : 1,
	};

	const handleClick = (e) => {
		completeTodo(todo.id);
	};

	return (
		<div
			className={classNames({
				[`${STYLE_BASE}container`]: true,
				[`${STYLE_BASE}dark_mode`]: theme === 'dark',
			})}
			data-testid='TODO_ITEM_CONTAINER'
			ref={setNodeRef}
			style={style}
			{...attributes}
			{...listeners}
		>
			<div className={`${STYLE_BASE}btn_container`}>
				<button
					className={classNames({
						[`${STYLE_BASE}btn`]: true,
						[`${STYLE_BASE}btn_pressed`]: todo.completed,
						[`${STYLE_BASE}btn_dark_mode`]: theme === 'dark',
					})}
					data-testid='TODO_ITEM_BTN'
					title='todo check mark'
					onClick={handleClick}
				>
					{todo.completed && <IconCheck role='img' />}
				</button>
			</div>
			<span
				className={classNames({
					[`${STYLE_BASE}completed`]: todo.completed,
					[`${STYLE_BASE}dark_mode`]: theme === 'dark',
				})}
				data-testid='TODO_ITEM_VALUE'
			>
				{todo.value}
			</span>{' '}
		</div>
	);
};

export default TodoItem;
