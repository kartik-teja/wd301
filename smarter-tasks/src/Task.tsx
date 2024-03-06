//import React from "react";
import "./TaskCard.css"
import { TaskItem } from "./types";

const Task = (props: TaskItem) => {
    console.log(props);
    return (
        <div className="TaskItem shadow-md border border-slate-100">
            <h2 className="text-base font-bold my-1">{props.title}</h2>
            <p className="text-sm text-slate-500">dueDate: {props.dueDate}</p>
            <p className="text-sm text-slate-500">
                Description: {props.description}
            </p>
        </div>
    );
};

export default Task;