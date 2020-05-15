import React from "react";
import { TaskList } from "./Task";
import { RecoilRoot } from "recoil";

export const App = () => (
  <RecoilRoot>
    <TaskList />
  </RecoilRoot>
);
