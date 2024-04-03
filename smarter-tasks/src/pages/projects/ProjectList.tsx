import React, { useEffect } from 'react';

import { fetchProjects } from '../../context/projects/actions';
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