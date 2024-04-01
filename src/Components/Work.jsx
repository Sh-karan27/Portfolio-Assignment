import React from 'react';
import { useUserData } from '../UserDataContexts/UserData';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ProjectCard from './ProjectCard';

const Work = () => {
  const userData = useUserData();

  useGSAP(() => {
    gsap.to('#project-h1', {
      opacity: 1,
      delay: 2.5,
      y: 0,
    });
    gsap.to('#project-h3', {
      opacity: 1,
      delay: 3,
      y: 0,
    });

    gsap.to('#span-1', {
      opacity: 1,
      delay: 3.5,
      x: 0,
    });
    gsap.to('#span-2', {
      opacity: 1,
      delay: 3.5,
      x: 0,
    });
  }, [userData]);

  if (!userData) {
    return <div>Loading.....</div>;
  }
  if (!userData.projects) {
    return <div>Loading.....</div>;
  }

  const Projects = userData.projects;

  const newProjects = Projects.sort((a, b) => a.sequence - b.sequence);

  return (
    <section className='w-full h-full flex items-center justify-center relative'>
      <div className='m-20  max-w-screen-lg mx-auto h-full flex flex-col items-center justify-center'>
        <div className='flex text-center flex-col justify-center items-center gap-10'>
          <h1
            id='project-h1'
            className=' opacity-0 translate-y-20 text-6xl font-bold text-gray-500'>
            My Creative{' '}
            <span
              id='span-1'
              className=' text-purple-700 translate-x-5 opacity-0'>
              Portfolio{' '}
            </span>
            Section
          </h1>
          <h3
            id='project-h3'
            className=' translate-y-20 opacity-0 text-4xl font-bold text-gray-500'>
            Checkout my{' '}
            <spna
              id='span-2'
              className='text-4xl text-purple-700 translate-x-5 opacity-0'>
              GitHub
            </spna>{' '}
            for more.
          </h3>
        </div>
        <div className='  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-lg:grid-cols-1 m-10 gap-20 justify-center'>
          {newProjects.map((project) => (
            <ProjectCard
              name={project.title}
              img={project.image.url}
              skill={project.techStack}
              des={project.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
