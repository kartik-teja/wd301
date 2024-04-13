import { API_ENDPOINT } from "../../config/constants";
import { CommentAvailableAction, CommentDispatch } from "./types";


export const fetchComments = async (dispatch: CommentDispatch, projectId: string, taskId: string) => {
    try {
        dispatch({ type: CommentAvailableAction.FETCH_COMMENT_REQUEST });

        const token = localStorage.getItem('authToken') ?? '';
        const response = await fetch(`${API_ENDPOINT}/projects/${projectId}/tasks/${taskId}/comments`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch comments');
        }

        const comments = await response.json();
        dispatch({ type: CommentAvailableAction.FETCH_COMMENT_SUCCESS, payload: comments });
    } catch (error) {
        dispatch({ type: CommentAvailableAction.FETCH_COMMENT_FAILURE, payload: error.message });
    }
};

export const addComment = async (dispatch: CommentDispatch, projectId: string, taskId: string, comment: any) => {
    try {
        dispatch({ type: CommentAvailableAction.ADD_COMMENT_REQUEST });

        const token = localStorage.getItem('authToken') ?? '';
        const response = await fetch(`${API_ENDPOINT}/projects/${projectId}/tasks/${taskId}/comments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(comment)
        });

        if (!response.ok) {
            throw new Error('Failed to add comment');
        }

        const newComment = await response.json();
        dispatch({ type: CommentAvailableAction.ADD_COMMENT_SUCCESS, payload: newComment });
    } catch (error) {
        dispatch({ type: CommentAvailableAction.ADD_COMMENT_FAILURE, payload: error.message });
    }
};
