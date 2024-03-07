//import React from "react";
import "./TaskCard.css"
import { TaskItem } from "./types";
interface Props extends TaskItem {
    onDelete: () => void;
}

const Task = (props: Props) => {
    console.log(props);
    const deleteTask = () => {
        props.onDelete();
    }
    return (
        <li className="TaskItem shadow-md border border-slate-100">
            <h2 className="text-base font-bold my-1">{props.title}</h2>
            <p className="text-sm text-slate-500">dueDate: {props.dueDate}</p>
            <p className="text-sm text-slate-500">
                Description: {props.description}
            </p>
            <button className="deleteTaskButton bg-red-600 rounded-lg px-5 text-center" onClick={deleteTask}>Delete Task</button>
        </li>
    );
};

export default Task;