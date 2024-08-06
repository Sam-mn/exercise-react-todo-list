import { ReactElement } from "react";
import { ITodo, ListItemProps } from "../interface";
import { useNavigate } from "react-router-dom";
import { useTodoList } from "../App";

const ListItem = (props: ListItemProps): ReactElement => {
  const navigate = useNavigate();
  const { todoList, setTodoList } = useTodoList();

  const changeCompleted = () => {
    const newTodoList: ITodo[] = todoList.map((t) => {
      if (t.id === props.id) {
        t.completed = !t.completed;
      }
      return t;
    });

    setTodoList([...newTodoList]);
  };

  const deleteTodo = () => {
    const newTodoList: ITodo[] = todoList.filter((t) => t.id !== props.id);
    setTodoList([...newTodoList]);
  };

  const moveUp = () => {
    if (props.index === 0) return;
    const newTodos = [...todoList];
    [newTodos[props.index - 1], newTodos[props.index]] = [
      newTodos[props.index],
      newTodos[props.index - 1],
    ];
    setTodoList([...newTodos]);
  };

  const moveDown = () => {
    if (props.index === todoList.length - 1) return;
    const newTodos = [...todoList];
    [newTodos[props.index + 1], newTodos[props.index]] = [
      newTodos[props.index],
      newTodos[props.index + 1],
    ];
    setTodoList([...newTodos]);
  };

  // disabled={props.index === 0}
  // disabled={props.index === todoList.length - 1}
  return (
    <li className="listItem">
      <div className="MoveDiv">
        {props.index !== 0 && (
          <span className="upp" onClick={moveUp}>
            ⬆️
          </span>
        )}
        {props.index !== todoList.length - 1 && (
          <span className="down" onClick={moveDown}>
            ⬇️
          </span>
        )}
      </div>
      <span
        style={{ textDecoration: props.completed ? "line-through" : "none" }}
        className="titleSpan"
      >
        {props.title}
      </span>
      <span
        style={{ textDecoration: props.completed ? "line-through" : "none" }}
        className="nameSpan"
      >
        {props.username}
      </span>

      <div>
        <button className="deleteButton" onClick={deleteTodo}>
          Delete
        </button>
        <button
          className="detailsButton"
          onClick={() => navigate(`/todo/${props.id}`)}
        >
          Details
        </button>
        <button className="completeButton" onClick={changeCompleted}>
          {props.completed ? "Active" : "Completed"}
        </button>
      </div>
    </li>
  );
};

export default ListItem;
