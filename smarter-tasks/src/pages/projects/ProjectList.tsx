import React, { useEffect } from "react";
import ProjectListItems from "./ProjectListItems";
import { useProjectsDispatch } from "../../context/projects/context";
import { fetchProjects } from "../../context/projects/actions";




const ProjectList: React.FC = () => {
  const dispatchProjects = useProjectsDispatch();

  useEffect(() => {
    fetchProjects(dispatchProjects);
  }, []);

  return (
    <div>
      <ProjectListItems />
    </div>
  )
}

export default ProjectList;