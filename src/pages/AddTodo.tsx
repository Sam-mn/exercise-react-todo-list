import React, { useState, FormEvent, useEffect } from "react";
import { AddTodoProps, IFormData, ITodo } from "../interface";
import { v4 as uuidv4 } from "uuid";
import { useTodoList } from "../App";
import moment from "moment";

const AddTodo = ({ edit, setEdit, id }: AddTodoProps) => {
  const [formData, setFormData] = useState<IFormData>({
    username: "",
    title: "",
    description: "",
  });
  const { todoList, setTodoList } = useTodoList();

  useEffect(() => {
    if (edit && todoList != null) {
      const todoToEdit: ITodo | undefined = todoList.find((t) => t.id === id);

      setFormData({
        title: todoToEdit ? todoToEdit.title : "",
        description: todoToEdit ? todoToEdit.description : "",
        username: todoToEdit ? todoToEdit.username : "",
      });
    }
  }, [edit, id, todoList]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    if (edit && setEdit) {
      const newTodo = todoList.map((t) =>
        t.id === id
          ? {
              ...t,
              title: formData.title,
              username: formData.username,
              description: formData.description,
            }
          : t
      );

      setTodoList([...newTodo]);
      setEdit(false);
    } else {
      const todo = {
        completed: false,
        id: uuidv4(),
        time: moment().format("MMMM Do YYYY, h:mm a"),
        ...formData,
      };
      setFormData({
        username: "",
        title: "",
        description: "",
      });

      if (todo != null) setTodoList([...todoList, todo]);
    }
  };

  return (
    <div className="mainAddDiv">
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          value={formData?.username}
          name="username"
          onChange={(e) => handleChange(e)}
          required
        />
        <label>Title</label>
        <input
          type="text"
          value={formData?.title}
          name="title"
          onChange={(e) => handleChange(e)}
          required
        />
        <label>Description</label>
        <textarea
          name="description"
          value={formData?.description}
          onChange={(e) => handleChange(e)}
          required
        />
        <button type="submit">{edit ? "Edit" : "Add"}</button>
      </form>
    </div>
  );
};

export default AddTodo;
