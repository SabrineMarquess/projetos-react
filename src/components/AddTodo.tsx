import React, { useContext } from "react";
import { TodoContextType } from "../contexts/TodoContextType";
import { TodoContext } from "../contexts/TodoContext";
import { useForm } from "react-hook-form";

const AddTodo = () => {
  const { addTodo } = useContext<TodoContextType>(TodoContext);

  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any, e: any) => {
    addTodo(data.title);
    e.target.reset();
    window.location.href = "/";
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h4>Nova Tarefa</h4>
      <div className="uk-margin uk-width-1-1">
        <input
          type="text"
          id="title"
          placeholder="Nova tarefa..."
          {...register("title")}
        />
      </div>
      <div className="uk-width-1-1">
        <button type="submit" className="uk-button uk-button-primary">
          Salvar
        </button>
      </div>
    </form>
  );
};

export default AddTodo;
