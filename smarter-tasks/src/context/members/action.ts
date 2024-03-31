import { API_ENDPOINT } from "../../config/constants";

export const addMember = async (dispatch: any, args: any) => {
    try {

        const token = localStorage.getItem("authToken") ?? "";
        const response = await fetch(`${API_ENDPOINT}/users`, {
            method: 'POST',
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(args)
        });
        if (!response.ok) {
            throw new Error("failed to create a Members");
        }
        const data = await response.json();

        if (data.errors && data.errors.length > 0) {
            return { ok: false, error: data.errors[0].message };
        }
        dispatch({ type: 'ADD_MEMBER_SUCCESS', payload: data });

        return { ok: true }
    }
    catch (error) {
        console.error("operation failed", error);
        return { ok: false, error };
    }
}
export const deleteMembers = async (dispatch: any, id: string) => {
    const token = localStorage.getItem("authToken") ?? "";

    try {
        dispatch({ type: "API_CALL_START" });
        const response = await fetch(`${API_ENDPOINT}/users/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${token}` },
        });
        if (!response.ok) {
            throw new Error("Failed to delete member");
        }
        const data = await response.json();
        dispatch({ type: "API_CALL_END", payload: data });

    } catch (error) {
        console.log('Error deleting member:', error);
        dispatch({ type: "API_CALL_ERROR" });
    }
};

export const fetchMembers = async (dispatch: any) => {
    console.log("Type and value of dispatch:", typeof dispatch, dispatch);
    const token = localStorage.getItem("authToken") ?? "";

    try {
        dispatch({ type: "API_CALL_START" });
        const response = await fetch(`${API_ENDPOINT}/users`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${token}` },
        });
        const data = await response.json();
        dispatch({ type: "API_CALL_END", payload: data });

    } catch (error) {
        console.log('Error fetching members:', error);
        //setIsLoading(false);
        dispatch({ type: "API_CALL_ERROR" });
    }
};