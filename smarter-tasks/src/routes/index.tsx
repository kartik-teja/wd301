import { createBrowserRouter } from "react-router-dom";

import Signin from "../pages/signin"
import Signup from "../pages/signup"
import AccountLayout from "../layouts/account"
import ProtectedRoute from "../ProtectedRoute";
import Projects from "../pages/projects";
import Members from "../pages/members";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Signin />
    },
    {
        path: "/signin",
        element: <Signin />
    },
    {
        path: "/signup",
        element: <Signup />
    },
    // Protected Routes
    {
        path: "account",
        element: (
            <ProtectedRoute>
                <AccountLayout />
            </ProtectedRoute>
        ),
        children: [
            {
                path: "projects",
                element: (<Projects />)
            },
            {
                path: "members",
                element: (<Members />)
            },
        ],
    },
]);
export default router;