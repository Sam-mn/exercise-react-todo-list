import ListItem from "../components/ListItem";
import { useTodoList } from "../App";
import { useEffect } from "react";
import { ITodo } from "../interface";
import moment from "moment";

const TodoList = () => {
  const { todoList, setTodoList } = useTodoList();

  useEffect(() => {}, [todoList]);

  const sortByName = async () => {
    const newList: ITodo[] = todoList.sort((a, b) =>
      a.username.localeCompare(b.username)
    );

    setTodoList([...newList]);
  };

  const sortByTime = () => {
    const newList: ITodo[] = todoList.sort(
      (a, b) =>
        moment(a.time, "MMMM Do YYYY, h:mm:ss a").valueOf() -
        moment(b.time, "MMMM Do YYYY, h:mm:ss a").valueOf()
    );
    setTodoList([...newList]);
  };

  return (
    <>
      {todoList.length > 1 && (
        <div className="todoListButtons">
          <button onClick={() => sortByName()}>Sort by user</button>
          <button onClick={sortByTime}>Sort by time</button>
        </div>
      )}
      {todoList.length > 0 ? (
        <ul className="list">
          {todoList.map((t, i) => {
            return (
              <ListItem
                key={t.id}
                index={i}
                completed={t.completed}
                description={t.description}
                id={t.id}
                time={t.time}
                title={t.title}
                username={t.username}
              />
            );
          })}
        </ul>
      ) : (
        <h1 className="noTodo">No todos to display.</h1>
      )}
    </>
  );
};

export default TodoList;
