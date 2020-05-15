import React from "react";
import { useRecoilState } from "recoil";
import { Task, taskState } from "../../atoms/task";

export const TaskItem: React.FC<{
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
