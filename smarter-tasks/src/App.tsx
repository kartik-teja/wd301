//import TaskApp from "./TaskApp";
import Layout from './Layout';
import HomePage from './pages/HomePage';
import TaskListPage from './pages/TaskListPage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import TaskDetailsPage from './pages/TaskDetailsPage';

const router = createBrowserRouter([
  {
    element: (
      <Layout />
    ),
    children: [{
      path: "/",
      element: (<HomePage />)
    },
    {
      path: "/tasks",
      element: (<TaskListPage />)
    },
    {
      path: "/tasks/:id",
      element: <TaskDetailsPage />
    },
    ]
  }
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
}
export default App;
