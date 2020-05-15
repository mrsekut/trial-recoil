import React, { FC, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { taskState, Task } from "./atoms/task";
import { filteredTodoListState, filterTasksState } from "./atoms/filterTasks";

export const TaskList = () => {
  const tasks = useRecoilValue(filteredTodoListState);

  return (
    <>
      <TodoListFilters />
      <TaskInput />
      <ul>
        {tasks.map((t, index) => (
          <TaskItem task={t} key={index} />
        ))}
      </ul>
    </>
  );
};

/**
 *
 * TaskInput
 *
 */
let id = 0;
const newTask = (title: string): Task => ({
  taskId: id++,
  title,
  isComplete: false,
});

const TaskInput = () => {
  const [value, setValue] = useState("");
  const setTasks = useSetRecoilState(taskState);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const onClick = () => {
    setTasks((t) => [...t, newTask(value)]);
    setValue("");
  };

  return (
    <div>
      <input type="text" value={value} onChange={onChange} />
      <button onClick={onClick}>登録</button>
    </div>
  );
};

/**
 *
 * TaskItem
 *
 */
const TaskItem: FC<{
  task: Task;
}> = ({ task }) => {
  const [tasks, setTasks] = useRecoilState(taskState);

  const onCheck = () => {
    const newTasks = tasks.map((t) =>
      t.taskId === task.taskId ? { ...t, isComplete: !t.isComplete } : t
    );
    setTasks(newTasks);
  };

  const onDeleteHandler = () => {
    const newTasks = tasks.filter((t) => t.taskId !== task.taskId);
    setTasks(newTasks);
  };

  return (
    <li key={task.taskId}>
      <input type="checkbox" checked={task.isComplete} onChange={onCheck} />
      {task.title}
      <button onClick={onDeleteHandler}>削除</button>
    </li>
  );
};

/**
 *
 * TodoListFilters
 *
 */
const TodoListFilters = () => {
  const [filter, setFilter] = useRecoilState(filterTasksState);
  const updateFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value);
  };

  return (
    <>
      Filter:
      <select value={filter} onChange={updateFilter}>
        <option value="Show All">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show Uncompleted">Uncompleted</option>
      </select>
    </>
  );
};
