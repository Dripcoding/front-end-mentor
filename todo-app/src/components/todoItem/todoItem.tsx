import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import { useSortable } from '@dnd-kit/sortable';
import { ITodoItem } from 'context/context';
import '../../styles/todoItem.scss';

const STYLE_BASE = 'TODO_ITEM_';

interface ITodoItemProps {
	todo: ITodoItem;
	key: string;
}

const TodoItem = ({ todo }: ITodoItemProps): JSX.Element => {
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
					className={`${STYLE_BASE}radio_btn`}
					data-testid='TODO_ITEM_BTN'
				></div>
			</div>
			<span data-testid='TODO_ITEM_VALUE'>{todo.value}</span>{' '}
		</div>
	);
};

export default TodoItem;
