import React, { createContext, useState, useEffect } from "react";
import { TodoContextType } from "./TodoContextType";
import { Todo } from "../models/Todo";
import { get, save } from "../services/TodoService";

export const TodoContext = createContext<TodoContextType>({
  todos: [],
  addTodo: () => {},
  removeTodo: () => {},
  toggle: () => {},
});

const TodoProvider = (props: any) => {
  const [todos, setTodos] = useState<Todo[]>(get);

  useEffect(() => {
    save(todos);
  }, [todos]);

  const addTodo = (title: string) => {
    const todo: Todo = { id: todos.length + 3, title: title, isDone: false };
    setTodos([...todos, todo]);
  };

  const removeTodo = (todo: Todo) => {
    const index = todos.indexOf(todo);
    setTodos(todos.filter((_, i) => i !== index));
  };

  const toggle = (todo: Todo) => {
    const index = todos.indexOf(todo);
    todos[index].isDone = !todo.isDone;
    setTodos([...todos]);
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, removeTodo, toggle }}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
