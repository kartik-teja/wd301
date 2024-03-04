import React from "react";

interface TaskProp {
    title: string;
}

class Task extends React.Component<TaskProp>{
    render() {
        return (<div className="text-xl">{this.props.title}</div>)
    }
}

export default Task;