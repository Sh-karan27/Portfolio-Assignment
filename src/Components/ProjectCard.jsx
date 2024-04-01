import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const ProjectCard = (props) => {
  useGSAP(() => {
    gsap.to('#project', {
      opacity: 1,

      delay: 1.3,
      x: 0,
      stagger: 0.3,
    });
  }, []);

  return (
    <div
      id='project'
      className=' opacity-0  translate-x-5 transition-all duration-500 ease-linear  group project-shadow px-5 py-5 flex flex-col gap-5 items-center justify-center w-[20rem] h-[20rem] hover:bg-gray-500 hover:cursor-pointer'>
      <img src={props.img} alt='' className='w-[15rem] flex items-center' />
      <div className='flex flex-col justify-start w-[15rem]'>
        <h1 className='text-2xl text-purple-500  group-hover:text-white'>
          {props.name}
        </h1>
        <h3 className=' text-purple-500  group-hover:text-white'>
          Technology:{' '}
          <span className='text-gray-500 group-hover:text-purple-500'>
            {props.skill}
          </span>
        </h3>
      </div>
    </div>
  );
};

export default ProjectCard;
