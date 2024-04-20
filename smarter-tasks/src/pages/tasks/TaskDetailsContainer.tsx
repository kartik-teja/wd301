import React from "react";
import { useProjectState } from "../../context/projects/context";
import { useTasksState } from "../../context/task/context";
import TaskDetails from "./TaskDetails";
import { useParams } from "react-router-dom";
import { CommentProvider } from "../../context/comments/context";

const TaskDetailsContainer = () => {
    let { taskID } = useParams();
    const projectState = useProjectState();
    const taskListState = useTasksState();
    const isFetchingTasks = taskListState.isLoading;
    const selectedTask = taskListState.projectData.tasks?.[taskID || ""];
    // We will render a loader based on the status,
    // We make sure, the tasks have been fetched, project is a valid one.
    if (isFetchingTasks || !projectState || projectState?.isLoading) {
        return <>Loading...</>;
    }
    if (!selectedTask) {
        return <>No such task!</>;
    }

    return (<CommentProvider>
        <TaskDetails />
    </CommentProvider>
    )
};

export default TaskDetailsContainer;