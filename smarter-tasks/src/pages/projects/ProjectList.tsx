import React, { useEffect, useReducer } from 'react';

import { fetchProjects } from '../../context/projects/action';
import { useProjectsDispatch } from '../../context/projects/context';
// interface Action {
//   type: string;
//   payload?: any;
// }



import ProjectListItem from './ProjectListItems';

const ProjectList: React.FC = () => {
  const dispatchProjects = useProjectsDispatch();

  useEffect(() => {
    fetchProjects(dispatchProjects);
  }, []);

  return (
    <div>
      <ProjectListItem />
    </div>
  );
};
export default ProjectList;