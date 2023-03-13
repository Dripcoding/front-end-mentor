import '../../styles/todoItem.scss';

const STYLE_BASE = 'TODO_ITEM_';

interface ITodoItem {
	id: number;
	value: string;
}

interface ITodoItemProps {
	todo: ITodoItem;
	key: string;
}

const TodoItem = ({ todo }: ITodoItemProps): JSX.Element => {
	return (
		<div className={`${STYLE_BASE}container`} data-testid='TODO_ITEM_CONTAINER'>
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
