import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ITodo } from "../interface";
import { useTodoList } from "../App";
import AddTodo from "./AddTodo";

const Todo = () => {
  const { id } = useParams();
  const { todoList, setTodoList } = useTodoList();
  const [edit, setEdit] = useState(false);

  const navigate = useNavigate();

  const [todo, setTodo] = useState<ITodo | null>();

  useEffect(() => {
    setTodo(todoList.find((t) => t.id === id));
  }, [id, edit]);

  const changeCompleted = () => {
    const newTodoList: ITodo[] = todoList.map((t) => {
      if (t.id === id) {
        t.completed = !t.completed;
      }
      return t;
    });

    setTodoList([...newTodoList]);
  };

  const deleteTodo = () => {
    const newTodoList: ITodo[] = todoList.filter((t) => t.id !== id);
    setTodoList([...newTodoList]);
    navigate(`/todoList`);
  };

  return (
    <>
      {edit ? (
        <AddTodo edit={edit} setEdit={setEdit} id={id} />
      ) : (
        <div className="todo_container">
          <div className="todoButtonDiv">
            <button className="deleteButton" onClick={deleteTodo}>
              Delete
            </button>
            <button className="completeButton" onClick={changeCompleted}>
              {todo?.completed ? "Active" : "Completed"}
            </button>
            <button className="editButton" onClick={() => setEdit(true)}>
              Edit{" "}
            </button>
          </div>
          <h1
            style={{
              textDecoration: todo?.completed ? "line-through" : "none",
            }}
          >
            {todo?.title}
          </h1>
          <section>
            <h3
              style={{
                textDecoration: todo?.completed ? "line-through" : "none",
              }}
            >
              {todo?.username}
            </h3>
            <p
              style={{
                textDecoration: todo?.completed ? "line-through" : "none",
              }}
            >
              {todo?.time}
            </p>
            <p
              style={{
                textDecoration: todo?.completed ? "line-through" : "none",
              }}
            >
              {todo?.description}
            </p>
          </section>
        </div>
      )}
    </>
  );
};

export default Todo;
