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
import check from "./images/icon-check.svg";

function App() {
  const [dark, setDark] = useState<boolean>(false);
  const [task, setTask] = useState("");
  const [todoList, setTodoList] = useState<ITask[]>([]);
  const [checked, setChecked] = useState(false);

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
    if (task !== "") {
      setTodoList([...todoList, newTask]);
      setTask("");
    } else {
      return null;
    }
  };

  const deleteTask = (taskNametoDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName !== taskNametoDelete;
      })
    );
  };

  return (
    <div className={`App ${dark ? `bg-[#171823]` : `bg-white`}`}>
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

        <div className="max-width relative flex justify-between items-center top-12 xl:top-[70px] ">
          <p className="text-white uppercase text-3xl font-medium">Todo</p>
          <img
            className="cursor-pointer h-6"
            onClick={() => setDark(!dark)}
            src={dark ? sunIcon : moonIcon}
            alt=""
          />
        </div>
        <div className=" container p-6 relative top-16">
          <div
            className={`input-container relative rounded py-6 pl-6 flex items-center ${
              dark ? `bg-[#25273D]` : `bg-white`
            }`}
          >
            <span
              className={`w-5 h-5 inline-block rounded-full border-2 mr-3 cursor-pointer relative ${dark && `border-[#393A4B]`} ${checked && `bg-red-500`}`}
              onClick={() => {
                setChecked(!checked);
              }}
            >
              <img src={check} className={`check-image ${checked ? `block` : `hidden`}`} alt="check" />
            </span>
            <input
              type="text"
              className={`text-xs ${dark && `bg-[#25273D]`}`}
              name="todo"
              placeholder="Create a new todo…"
              value={task}
              onChange={handleChange}
            />
            <button onClick={addTask}>add task</button>
          </div>
        </div>
      </header>

      <div className="tasklist container relative top-8 p-6">
        {todoList.map((task: ITask, key: number) => {
          return (
            <ToDoTask
              dark={dark}
              deleteTask={deleteTask}
              setDark={setDark}
              key={key}
              task={task}
              checked={checked}
              setChecked={setChecked}
            />
          );
        })}
        <div
          className={`flex justify-between px-5 py-4 items-center border-b-2 rounded-t-none rounded-md ${
            dark ? `bg-[#25273D] border-none` : `bg-white`
          }`}
        >
          <p className="text-[#9495A5] text-xs">{todoList.length} items left</p>
          <p className="text-[#9495A5] text-xs cursor-pointer">
            Clear Completed
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
