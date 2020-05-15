import React, { FC, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { taskState, Task } from "./atoms/task";

let id = 0;
const newTask = (title: string): Task => ({
  taskId: id++,
  title,
  completed: false,
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

const TaskItem: FC<{
  task: Task;
}> = ({ task }) => {
  const [tasks, setTasks] = useRecoilState(taskState);

  const onCheck = () => {
    const newTasks = tasks.map((t) =>
      t.taskId === task.taskId ? { ...t, completed: !t.completed } : t
    );
    setTasks(newTasks);
  };

  const onDeleteHandler = () => {
    const newTasks = tasks.filter((t) => t.taskId !== task.taskId);
    setTasks(newTasks);
  };

  return (
    <li key={task.taskId}>
      <input type="checkbox" checked={task.completed} onChange={onCheck} />
      {task.title}
      <button onClick={onDeleteHandler}>削除</button>
    </li>
  );
};

export const TaskList = () => {
  const tasks = useRecoilValue(taskState);

  return (
    <>
      <TaskInput />
      <ul>
        {tasks.map((t, index) => (
          <TaskItem task={t} key={index} />
        ))}
      </ul>
    </>
  );
};
