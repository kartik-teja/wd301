import './TaskCard.css'

import './TaskCard.css'

const TaskCard = (props) => {
    return (
        <div className="TaskItem">
            <h2 className="text-xl font-bold">{props.title}</h2>
            {props.due_on ? (
                <p className="color-grey-500">Due on: {props.due_on}</p>
            ) : (
                <p>Completed on: {props.completed_on}</p>
            )}
            <p>Assignee: {props.assigneeName}</p>
        </div>
    )
}

export default TaskCard;