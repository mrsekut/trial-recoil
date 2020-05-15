import { atom } from "recoil";

export type Task = {
  taskId: number;
  title: string;
  completed: boolean;
};

export const taskState = atom<Task[]>({
  key: "task",
  default: [],
});
