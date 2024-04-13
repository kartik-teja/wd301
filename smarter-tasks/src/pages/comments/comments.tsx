import React, { useEffect } from "react";

import { useParams } from "react-router-dom";
import { useMembersState } from "../../context/members/context";
import { useCommentState, useCommentDispatch } from "../../context/comments/context";
import { fetchComments } from "../../context/comments/action";

const Comment: React.FC = () => {
    const commentState = useCommentState();
    const { comments } = commentState;
    const commentDispatch = useCommentDispatch();
    const memberState = useMembersState();
    const { projectID, taskID } = useParams();

    useEffect(() => {
        fetchComments(commentDispatch, projectID!, taskID!);
    }, [commentDispatch, projectID, taskID]);

    const getDate = (date: Date): string => {
        const newDate = new Date(date);
        return `${newDate.toLocaleDateString("en-In")} ${newDate.toLocaleTimeString(
            "en-In")}`
    }

    const getuser = (author: number) => {
        const user = memberState?.members.filter((member) => parseInt(member.id) === author)[0];
        return user?.name;
    }

    return (
        <>
            {Array.isArray(comments) && comments.map((comment) => {
                return (
                    <div
                        key={comment.id}
                        className="comment"
                    >
                        <div
                            className="flex text-gray-800 "
                        >
                            <div className="mr-3">{comment.description}</div>
                            <div className="mr-3">{getDate(comment.commentOn)}</div>
                            <div className="mr-3">{getuser(comment.author)}</div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default Comment;
