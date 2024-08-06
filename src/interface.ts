export interface ITodo {
  id: string;
  completed: boolean;
  title: string;
  time: string;
  username: string;
  description: string;
}

export interface IFormData {
  title: string;
  username: string;
  description: string;
}

export interface ContextType {
  todoList: ITodo[];
  setTodoList: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

export interface AddTodoProps {
  edit?: boolean;
  setEdit?: React.Dispatch<React.SetStateAction<boolean>>;
  id?: string;
}

export interface ListItemProps {
  id: string;
  completed: boolean;
  title: string;
  time: string;
  username: string;
  description: string;
  index: number;
}
