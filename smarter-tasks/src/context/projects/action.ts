import { API_ENDPOINT } from "../../config/constants";

export const addProject = async (dispatch: any, args: any) => {
  try {

    const token = localStorage.getItem("authToken") ?? "";
    const response = await fetch(`${API_ENDPOINT}/projects`, {
      method: 'POST',
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(args)
    });
    if (!response.ok) {
      throw new Error("failed to create a project");
    }
    const data = await response.json();

    if (data.errors && data.errors.length > 0) {
      return { ok: false, error: data.errors[0].message };
    }
    dispatch({ type: 'ADD_PROJECT_SUCCESS', payload: data });

    return { ok: true }
  }
  catch (error) {
    console.error("operation failed", error);
    return { ok: false, error };
  }
}
export const fetchProjects = async (dispatch: any) => {
  const token = localStorage.getItem("authToken") ?? "";

  try {
    dispatch({ type: "API_CALL_START" });
    const response = await fetch(`${API_ENDPOINT}/projects`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${token}` },
    });
    const data = await response.json();
    dispatch({ type: "API_CALL_END", payload: data });
    // setProjects(data);
    // setIsLoading(false);
  } catch (error) {
    console.log('Error fetching projects:', error);
    //setIsLoading(false);
    dispatch({ type: "API_CALL_ERROR" });
  }
};