import { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
	DndContext,
	KeyboardSensor,
	MouseSensor,
	TouchSensor,
	useDroppable,
	useSensor,
	useSensors,
} from '@dnd-kit/core';
import {
	rectSortingStrategy,
	rectSwappingStrategy,
	SortableContext,
	sortableKeyboardCoordinates,
	arrayMove as dndKitArrayMove,
} from '@dnd-kit/sortable';
import { TodoContext } from 'context/context';
import TodoItem from '../todoItem/todoItem';
import TodoControls from '../todoControls/todoControls';
import '../../styles/todos.scss';

const STYLE_BASE = 'TODOS_';

const Todos = (): JSX.Element => {
	const { todos, setTodos } = useContext(TodoContext);
	const { setNodeRef } = useDroppable({ id: `${uuidv4()}` });
	const [activeId, setActiveId] = useState(null);

	const sensors = useSensors(
		useSensor(MouseSensor),
		useSensor(TouchSensor),
		useSensor(KeyboardSensor, {
			coordinateGetter: sortableKeyboardCoordinates,
		})
	);

	const arrayMove = (array, oldIndex, newIndex) => {
		return dndKitArrayMove(array, oldIndex, newIndex);
	};

	const handleDragStart = ({ active }) => setActiveId(active.id);

	const handleDragCancel = () => setActiveId(null);

	const handleDragEnd = ({ active, over }) => {
		if (!over) {
			setActiveId(null);
			return;
		}

		if (active.id !== over.id) {
			const activeContainer = active.data.current.sortable.containerId;
			const overContainer = over.data.current?.sortable.containerId || over.id;
			const activeIndex = active.data.current.sortable.index;
			const overIndex = over.data.current.sortable.index;

			setTodos((todos) => {
				let newItems;
				if (activeContainer === overContainer) {
					// newItems = {
					// 	...itemGroups,
					// 	[overContainer]: arrayMove(
					// 		itemGroups[overContainer],
					// 		activeIndex,
					// 		overIndex
					// 	),
					// };

					newItems = arrayMove(todos, activeIndex, overIndex);
				}

				return newItems;
			});
		}

		setActiveId(null);
	};

	return (
		<DndContext
			sensors={sensors}
			onDragStart={handleDragStart}
			onDragCancel={handleDragCancel}
			// onDragOver={handleDragOver}
			onDragEnd={handleDragEnd}
		>
			<SortableContext items={todos} strategy={rectSortingStrategy}>
				<section
					className={`${STYLE_BASE}container`}
					data-testid='TODOS_CONTAINER'
					ref={setNodeRef}
				>
					{todos.map((todo) => {
						return <TodoItem key={uuidv4()} todo={todo} />;
					})}
					<TodoControls />
				</section>
			</SortableContext>
		</DndContext>
	);
};

export default Todos;
