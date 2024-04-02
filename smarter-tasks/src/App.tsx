import { useContext } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes"
import { ThemeContext } from "./context/theme";
import { ProjectProvider } from "./context/projects/context";
import { MemberProvider } from "./context/members/context";

const App = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <div className={`h-screen w-full mx-auto py-2 ${theme === "dark" ? "dark" : ""}`}>
      <ProjectProvider>
        <MemberProvider>
          <RouterProvider router={router} />
        </MemberProvider>
      </ProjectProvider>
    </div>
  );
}
export default App;