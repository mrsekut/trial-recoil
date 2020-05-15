import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { Task, taskState } from "../../atoms/task";

let id = 0;
const newTask = (title: string): Task => ({
  taskId: id++,
  title,
  isComplete: false,
});

export const TaskInput: React.FC = () => {
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
