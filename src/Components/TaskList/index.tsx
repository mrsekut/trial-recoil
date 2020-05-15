import React from "react";
import { useRecoilValue } from "recoil";
import { filteredTodoListState } from "../../atoms/filterTasks";
import { TodoListFilters } from "../TodoListFilters";
import { TaskInput } from "../TaskInput";
import { TaskItem } from "../TaskItem";

export const TaskList: React.FC = () => {
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
