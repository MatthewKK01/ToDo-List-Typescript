import React, { useState, ChangeEvent } from "react";
import "./App.css";
import lightMB from "./images/bg-mobile-light.jpg";
import darkMB from "./images/bg-mobile-dark.jpg";
import lightDesktop from "./images/bg-desktop-light.jpg";
import DarkDesktop from "./images/bg-desktop-dark.jpg";
import sunIcon from "./images/icon-sun.svg";
import moonIcon from "./images/icon-moon.svg";
import ITask from "./interfaces";
import ToDoTask from "./Components/ToDoTask";

function App() {
  const [dark, setDark] = useState(false);
  const [task, setTask] = useState("");
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };
  const addTask = () => {
    const newTask: ITask = {
      uuid: function (): string | number {
        throw new Error("Function not implemented.");
      },
      taskName: task,
    };
    setTodoList([...todoList, newTask]);
    setTask("");
  };

  const deleteTask = (taskNametoDelete:string):void => {
    setTodoList(todoList.filter((task)=>{
      return task.taskName !== taskNametoDelete;
    }))
}

  return (
    <>
      <header className="relative">
        <img
          className="absolute min-[375px]:w-full md:hidden"
          src={dark ? darkMB : lightMB}
          alt="bg"
        />
        <img
          className="absolute min-[375px]:hidden md:block w-full"
          src={dark ? DarkDesktop : lightDesktop}
          alt=""
        />
        <div className="max-width relative flex justify-between items-center top-12 xl:top-[70px]">
          <p className="text-white uppercase text-3xl font-medium">Todo</p>
          <img
            className="cursor-pointer h-6"
            onClick={() => setDark(!dark)}
            src={dark ? sunIcon : moonIcon}
            alt=""
          />
        </div>
        <div className="input-container relative">
          <input type="text" name="todo" value={task} onChange={handleChange} />
          <button onClick={addTask}>add task</button>
        </div>
      </header>

      <div className="tasklist">
        {todoList.map((task: ITask, key: number) => {
          return <ToDoTask deleteTask={deleteTask} key={key} task={task} />;
        })}
      </div>
    </>
  );
}

export default App;
