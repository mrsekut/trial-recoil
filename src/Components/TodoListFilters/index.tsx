import React from "react";
import { useRecoilState } from "recoil";
import { filterTasksState } from "../../atoms/filterTasks";

export const TodoListFilters: React.FC = () => {
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
