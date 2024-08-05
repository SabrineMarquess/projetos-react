import React, { useState } from "react";
import Navbar from "./Navbar";
import TodoList from "./TodoList";
import TodoContext from "../contexts/TodoContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddTodo from "./AddTodo";

const App = () => {
  return (
    <TodoContext>
      <BrowserRouter>
        <Navbar></Navbar>
        <br />
        <div className="uk-container">
          <Routes>
            <Route path="/create" element={<AddTodo />} />
            <Route path="/" element={<TodoList />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </TodoContext>
  );
};

export default App;
