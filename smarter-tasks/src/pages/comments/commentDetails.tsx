//import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { addComment } from "../../context/comments/action";
import { useCommentDispatch } from "../../context/comments/context";


const CommentDetails = () => {
    const { projectId, taskId } = useParams();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit: SubmitHandler<{ comment: string }> = async (data) => {
        try {
            await addComment(useCommentDispatch, projectId ?? "", taskId ?? "", data.comment);
            navigate(`/projects/${projectId}/tasks/${taskId}`);
        } catch (error) {
            console.error("Failed to add comment:", error);
        }
    };

    return (
        <>
            <h2>Add Comment</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="text"
                    id="commentBox"
                    placeholder="Enter comment"
                    {...register("comment", { required: true })}
                    className={`border rounded-md py-1 px-3 my-2 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue ${errors.comment ? "border-red-500" : ""
                        }`}
                />
                <button
                    type="submit"
                    id="addCommentBtn"
                    className="justify-center rounded-md border border-transparent bg-blue-600 px-4 py-1 mx-2 my-2 mr-2 text-sm font-medium text-white hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                >
                    ADD
                </button>
            </form>

        </>
    );
};

export default CommentDetails;
