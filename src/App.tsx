import { Outlet, useOutletContext } from "react-router-dom";
import Navbar from "./pages/Navbar";
import { useState } from "react";
import { ITodo } from "./interface";

type ContextType = {
  todoList: ITodo[];
  setTodoList: React.Dispatch<React.SetStateAction<ITodo[]>>;
};

export function App() {
  const [todoList, setTodoList] = useState<ITodo[]>([]);

  return (
    <>
      <Navbar />
      <Outlet context={{ todoList, setTodoList } satisfies ContextType} />
    </>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useTodoList = () => {
  return useOutletContext<ContextType>();
};
