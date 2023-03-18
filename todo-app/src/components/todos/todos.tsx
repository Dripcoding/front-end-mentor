import { v4 as uuidv4 } from 'uuid';
import {
	DndContext,
	KeyboardSensor,
	MouseSensor,
	PointerSensor,
	TouchSensor,
	useDroppable,
	useSensor,
	useSensors,
} from '@dnd-kit/core';
import {
	rectSortingStrategy,
	SortableContext,
	sortableKeyboardCoordinates,
	arrayMove as dndKitArrayMove,
} from '@dnd-kit/sortable';
import { ITodoItem, useTodo } from 'context/context';
import TodoItem from '../todoItem/todoItem';
import TodoControls from '../todoControls/todoControls';
import '../../styles/todos.scss';
import { useState } from 'react';

const STYLE_BASE = 'TODOS_';

export enum TodoFilters {
	ALL = 'ALL',
	ACTIVE = 'ACTIVE',
	COMPLETED = 'COMPLETED',
}

export const filterStrategy = {
	ALL: (todos: ITodoItem[]) => todos,
	ACTIVE: (todos: ITodoItem[]) => todos.filter((todo) => !todo.completed),
	COMPLETED: (todos: ITodoItem[]) => todos.filter((todo) => todo.completed),
};

const Todos = (): JSX.Element => {
	const { todos, updateTodos, completeTodo, clearCompleted } = useTodo();
	const { setNodeRef } = useDroppable({ id: `${uuidv4()}` });
	const [filter, setFilter] = useState(TodoFilters.ALL.toString());

	const activeCount = todos.filter((todo) => !todo.completed).length;
	const filteredTodos = filterStrategy[filter](todos);

	const sensors = useSensors(
		useSensor(MouseSensor, { activationConstraint: { distance: 10 } }),
		useSensor(PointerSensor, { activationConstraint: { distance: 10 } }),
		useSensor(TouchSensor),
		useSensor(KeyboardSensor, {
			coordinateGetter: sortableKeyboardCoordinates,
		})
	);

	const arrayMove = (
		array: ITodoItem[],
		oldIndex: number,
		newIndex: number
	): ITodoItem[] => {
		return dndKitArrayMove(array, oldIndex, newIndex);
	};

	const handleDragEnd = ({ active, over }) => {
		if (!over) {
			return;
		}

		if (active.id !== over.id) {
			const activeContainer = active.data.current.sortable.containerId;
			const overContainer = over.data.current?.sortable.containerId || over.id;
			const activeIndex = active.data.current.sortable.index;
			const overIndex = over.data.current.sortable.index;

			let calculated;
			if (activeContainer === overContainer) {
				calculated = arrayMove(todos, activeIndex, overIndex);
			} else {
				calculated = todos;
			}

			updateTodos(calculated);
		}
	};

	return (
		<DndContext sensors={sensors} onDragEnd={handleDragEnd}>
			<SortableContext items={todos} strategy={rectSortingStrategy}>
				<section
					className={`${STYLE_BASE}container`}
					data-testid='TODOS_CONTAINER'
					ref={setNodeRef}
				>
					{filteredTodos.map((todo) => {
						return (
							<TodoItem
								key={uuidv4()}
								todo={todo}
								completeTodo={completeTodo}
							/>
						);
					})}
					<TodoControls
						activeCount={activeCount}
						changeFilter={setFilter}
						filter={filter}
						clearCompleted={clearCompleted}
					/>
				</section>
			</SortableContext>
		</DndContext>
	);
};

export default Todos;
