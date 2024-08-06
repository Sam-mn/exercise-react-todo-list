import { useTodoList } from "../App";

const About = () => {
  const { todoList } = useTodoList();

  return (
    <div className="about">
      <h1>Number of todos: {todoList.length} </h1>
      <h3>
        A todo list helps individuals or teams organize, prioritize, and track
        tasks effectively, enhancing productivity and reducing stress by
        providing a clear, structured overview of responsibilities and progress.
      </h3>
    </div>
  );
};

export default About;
