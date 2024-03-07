//import React from "react";
import Task from "./Task";
import { TaskItem } from "./types";
interface Props {
    tasks: TaskItem[];
    deleteTask: (task: TaskItem) => void;
}


const TaskList = (props: Props) => {
    const { deleteTask } = props;

    const handleDeleteTask = (task: TaskItem) => {
        deleteTask(task);
    }
    const list = props.tasks.map((task, idx) => (
        <Task
            key={idx}
            title={task.title}
            description={task.description} dueDate={task.dueDate}
            onDelete={() => handleDeleteTask(task)} />
    ));
    return <>{list}</>
}

export default TaskList;

