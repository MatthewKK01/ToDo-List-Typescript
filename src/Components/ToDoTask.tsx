import React, { useState } from "react";
import ITask from "../interfaces";
import check from "../images/icon-check.svg";

interface Props {
  task: ITask;
  deleteTask(taskNametoDelete: string): void;
  dark: any;
  setDark : any;
  checked: boolean;
  setChecked: any;
}

function ToDoTask({ task, deleteTask, dark, setDark,checked, setChecked}: Props) {

  const [isChecked , setIsChecked] = useState(false);
  const [isCompleted,setIsCompleted] = useState(false);

  const completed = () => {
    setChecked(!isChecked);
    setIsCompleted(!isCompleted)
  }

  return (
    <>
      <ul
        className={`flex justify-between items-center relative ${
          dark ? `bg-[#25273D] text-[#C8CBE7] border-b-[#393A4B]` : `bg-white`
        } border-b-2 rounded-b-none rounded-md p-4`}
      >
        <span onClick={completed} className="w-5 top-[17.5px] bg-black h-5  absolute rounded-full border-2 mr-3 cursor-pointer">
          <img src={check} alt="check" className="check" />
        </span>
        <li className={`pl-8 ${dark ? `text-[#C8CBE7]` : `text-[#494C6B]`} ${isCompleted && `line-through`}`}>{task.taskName}</li>
        <button onClick={() => deleteTask(task.taskName)}>&#x2715;</button>
      </ul>
    </>
  );
}

export default ToDoTask;
