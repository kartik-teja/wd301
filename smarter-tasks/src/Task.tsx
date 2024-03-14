import "./TaskCard.css";
import { TaskItem } from "./types";
import { Link } from "react-router-dom";

interface TaskProps extends TaskItem {
    removeTask: (taskid: string) => void;
}
const Task = (props: TaskProps) => {
    props;
    console.log(props);
    return (
        <div className="TaskItem shadow-md border border-slate-100">
            <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                <div>
                    <Link to={`/tasks/${props.id || ""}`} className="task-link">
                        <h2 className="text-base font-bold my-1">{props.title}</h2>
                    </Link>
                    <p className="text-sm text-slate-500">{props.dueDate}</p>
                    <p className="text-sm text-slate-500">
                        Description: {props.description}
                    </p>
                </div>

                <button className="deleteTaskButton cursor-pointer flex items-center justify-center h-4 w-4 rounded-full my-5 mr-5"
                    onClick={() => props.removeTask(props.id)}>
                    X
                </button>
            </div>
        </div>
    );
};

export default Task;