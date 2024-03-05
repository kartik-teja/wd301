import React from "react";
import { TaskItem } from "./types";

interface TaskFormProps {
    addTask: (task: TaskItem) => void;
}
interface TaskFormState {
    title: string,
    description: string,
    date: string,
}
class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
    constructor(props: TaskFormProps) {
        super(props);
        this.state = {
            title: "",
            description: "",
            date: "",
        };
        this.addTask = this.addTask.bind(this);
    }
    titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        console.log(`${event.target.value}`);
        this.setState({ title: event.target.value });
    };

    descriptionChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        this.setState({ description: event.target.value });
    };

    dateChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        this.setState({ date: event.target.value });
    };

    addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        const newTask = {
            title: this.state.title,
            description: this.state.description,
            date: this.state.date,
        };
        this.props.addTask(newTask);
        this.setState({ title: "", description: "", date: "" });
    };
    render() {
        return (
            <form onSubmit={this.addTask}>
                <input
                    id="todoTitle"
                    className="border-solid border-2 p-2"
                    type="text"
                    value={this.state.title}
                    onChange={this.titleChanged}
                    required
                />
                <input
                    id="todoDescription"
                    type="text"
                    value={this.state.description}
                    onChange={this.descriptionChanged}
                />
                <input
                    id="todoDueDate"
                    type="date"
                    value={this.state.date}
                    onChange={this.dateChange}
                    required
                />
                <button
                    id="addTaskButton"
                    type="submit"
                    className="border-solid border-2 p-2"
                >
                    Add item
                </button>
            </form>
        )
    }
}
export default TaskForm;