import React from "react";
import { AvailableColumns, ColumnData, ProjectData } from "../../context/task/types";
import Column from "./Column";
import { useParams } from "react-router-dom";
import { DragDropContext, OnDragEndResponder } from "react-beautiful-dnd";
import { useTasksDispatch } from "../../context/task/context";
import { reorderTasks, updateTask } from "../../context/task/actions";

const Container = (props: React.PropsWithChildren) => {
    return <div className="flex mx-auto max-w-screen-lg">{props.children}</div>;
};

const DragDropList = (props: {
    data: ProjectData;
}) => {
    const taskDispatch = useTasksDispatch();
    const { projectID } = useParams();
    const onDragEnd: OnDragEndResponder = async (result) => {
        const { destination, source, draggableId } = result;
        if (!destination) {
            return;
        }
        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }
        const startKey = source.droppableId as AvailableColumns;
        const finishKey = destination.droppableId as AvailableColumns;

        const start = props.data.columns[startKey];
        const finish = props.data.columns[finishKey];

        if (start === finish) {
            const newTaskIDs = Array.from(start.taskIDs);
            newTaskIDs.splice(source.index, 1);
            newTaskIDs.splice(destination.index, 0, draggableId);
            const newColumn = {
                ...start,
                taskIDs: newTaskIDs,
            };
            const newState = {
                ...props.data,
                columns: {
                    ...props.data.columns,
                    [newColumn.id]: newColumn,
                },
            };
            reorderTasks(taskDispatch, newState);
            return;
        }
        const startTaskIDs = Array.from(start.taskIDs);
        const updatedItems = startTaskIDs.splice(source.index, 1);

        const newStart = {
            ...start,
            taskIDs: startTaskIDs,
        };

        const finishTaskIDs = Array.from(finish.taskIDs);

        finishTaskIDs.splice(destination.index, 0, draggableId);
        const newFinish = {
            ...finish,
            taskIDs: finishTaskIDs,
        };

        const newState = {
            ...props.data,
            columns: {
                ...props.data.columns,
                [newStart.id]: newStart,
                [newFinish.id]: newFinish,
            },
        };
        reorderTasks(taskDispatch, newState);
        const updatedTask = props.data.tasks[updatedItems[0]];
        updatedTask.state = finishKey;
        updateTask(taskDispatch, projectID ?? "", updatedTask);
    };
    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Container>
                <div className="grid grid-cols-3 gap-4">
                    {Object.keys(props.data.columns).map((columnId) => {
                        const column: ColumnData = props.data.columns[columnId as AvailableColumns];
                        const tasks = column.taskIDs.map(
                            (taskId: string) => props.data.tasks[taskId]
                        );

                        return <Column key={column.id} column={column} tasks={tasks} />;
                    })}
                </div>
            </Container>
        </DragDropContext>
    );
};

export default DragDropList;