import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">Add Todo</Link>
      <Link to="/todoList">Todo list</Link>
      <Link to="/about">About</Link>
    </div>
  );
};

export default Navbar;
