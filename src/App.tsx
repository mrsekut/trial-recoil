import React from "react";
import { RecoilRoot } from "recoil";
import { TaskList } from "./Components/TaskList";

export const App = () => (
  <RecoilRoot>
    <TaskList />
  </RecoilRoot>
);
