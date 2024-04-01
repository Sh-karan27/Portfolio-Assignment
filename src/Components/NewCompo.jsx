import React, { useState } from 'react';
import { useUserData } from '../UserDataContexts/UserData';

const NewCompo = () => {
  const [filter, setFilter] = useState([]);
  const userData = useUserData();
  if (!userData) {
    return <div>Loading.....</div>;
  }
  if (!userData.projects) {
    return <div>Loading.....</div>;
  }

  const Projects = userData.projects;

  const newProjects = Projects.sort((a, b) => a.sequence - b.sequence);
  console.log(newProjects);
  setFilter(newProjects);
  console.log(filter);
  return (
    <div>
      NewCompo
      {filter.map((project) => (
        <p>{project.name}</p>
      ))}
    </div>
  );
};

export default NewCompo;
