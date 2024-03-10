//import React from "react";
import Task from "./Task";
import { TaskItem } from "./types";
interface Props {
    tasks: TaskItem[];
    removeTask: (taskId: string) => void;
}


const TaskList = (props: Props) => {

    const handleDeleteTask = (taskId: string) => {
        props.removeTask(taskId);
    }
    const list = props.tasks.map((task) => (
        <Task
            id={task.id}
            title={task.title}
            description={task.description}
            dueDate={task.dueDate}
            removeTask={() => handleDeleteTask(task.id)} />
    ));
    return <>{list}</>
}

export default TaskList;


