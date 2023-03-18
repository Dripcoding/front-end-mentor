import classNames from 'classnames';
import { CSS } from '@dnd-kit/utilities';
import { useSortable } from '@dnd-kit/sortable';
import { ITodoItem, useTodo } from 'context/context';
import { ReactComponent as CheckIcon } from '../../assets/images/icon-check.svg';
import '../../styles/todoItem.scss';

const STYLE_BASE = 'TODO_ITEM_';

interface ITodoItemProps {
	todo: ITodoItem;
	key: string;
	completeTodo: (id: string) => void;
}

const TodoItem = ({ todo, completeTodo }: ITodoItemProps): JSX.Element => {
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
			className={`${STYLE_BASE}container`}
			data-testid='TODO_ITEM_CONTAINER'
			ref={setNodeRef}
			style={style}
			{...attributes}
			{...listeners}
		>
			<div className={`${STYLE_BASE}radio_btn_container`}>
				<div
					className={classNames({
						[`${STYLE_BASE}radio_btn`]: true,
						[`${STYLE_BASE}radio_btn_pressed`]: todo.completed,
					})}
					data-testid='TODO_ITEM_BTN'
					onClick={handleClick}
				>
					{todo.completed && (
						<img
							src='src/assets/images/icon-check.svg'
							alt='todo check mark'
							data-testid='TODO_ITEM_CHECK_MARK'
						/>
					)}
				</div>
			</div>
			<span
				className={classNames({
					[`${STYLE_BASE}completed`]: todo.completed,
				})}
				data-testid='TODO_ITEM_VALUE'
			>
				{todo.value}
			</span>{' '}
		</div>
	);
};

export default TodoItem;
