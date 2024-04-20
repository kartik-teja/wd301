import React, { forwardRef } from "react";
import { Draggable } from "react-beautiful-dnd";
import { TaskDetails } from "../../context/task/types";
import "./TaskCard.css";
import { Link, useParams } from "react-router-dom";
import { deleteTask } from "../../context/task/actions";
import { useTasksDispatch } from "../../context/task/context";

const Task = forwardRef<
    HTMLDivElement,
    React.PropsWithChildren<{ task: TaskDetails }>
>((props, ref) => {
    const taskDispatch = useTasksDispatch();
    const { projectID } = useParams();
    const { task } = props;
    return (
        <div ref={ref} {...props} className="m-2 flex">
            <Link className="TaskItem" to={`tasks/${task.id}`}>
                <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                    <div>
                        <h2 className="text-base font-bold my-1">{task.title}</h2>
                        <p className="text-sm text-gray-500">{new Date(task.dueDate).toDateString()}</p>
                        <p className="text-sm text-gray-500">Description: {task.description}</p>
                        <p className="text-sm text-gray-500">Assignee: {task.assignedUserName ?? "-"}</p>
                        <button
                            className="deleteTaskButton"
                            onClick={(event) => {
                                event.preventDefault();
                                deleteTask(taskDispatch, projectID ?? "", task);
                            }}
                        >delete
                        </button>
                    </div>

                </div>
            </Link>
        </div>
    );
});

const Container = (
    props: React.PropsWithChildren<{
        task: TaskDetails;
        index: number;
    }>
) => {
    return (
        <Draggable index={props.index} draggableId={`${props.task.id}`}>
            {(provided) => (
                <Task
                    task={props.task}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                />
            )}
        </Draggable>
    );
};

export default Container;