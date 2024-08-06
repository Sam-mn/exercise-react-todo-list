import { createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import AddTodo from "./pages/AddTodo";
import TodoList from "./pages/TodoList";
import Todo from "./pages/Todo";
import About from "./pages/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <AddTodo /> },
      { path: "todoList", element: <TodoList /> },
      { path: "about", element: <About /> },
      { path: "todo/:id", element: <Todo /> },
    ],
  },
]);
