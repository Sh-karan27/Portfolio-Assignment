import React from 'react';
import { Tilt } from 'react-tilt';
import { useUserData } from '../UserDataContexts/UserData';
import { useUserAboutData } from '../UserDataContexts/UserAboutContext';
import ServiceCard from './ServiceCard';
import Exprience from './Exprience';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/all';


const About = () => {
  const userData = useUserData();
  const userAbout = useUserAboutData();
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  useGSAP(() => {
    gsap.to('#text-1', {
      opacity: 1,
      x: 0,
      delay: 1.5,
    });
    gsap.to('#text-2', {
      opacity: 1,
      x: 0,
      delay: 1.7,
    });

    gsap.to('#text-3', {
      opacity: 1,
      y: 0,
      delay: 2,
    });
    gsap.to('#text-4', {
      opacity: 1,
      x: 0,
      delay: 2.3,
    });
    gsap.to('.show-card', {
      opacity: 1,
      stagger: 0.4,
      delay: 2.3,
    });
    gsap.to('#services', {
      duration: 0.5,
      ease: 'power2.out',

      scrollTrigger: {
        trigger: '#skill',
        start: 'top bottom', // Start animation when the center of the element reaches the bottom of the viewport
        end: 'bottom center', // End animation when the center of the element reaches the center of the viewport
        scrub: true,
        onEnter: () => {
          // Define animation to run when the element enters the scroll trigger
          gsap.to('#skill', {
            opacity: 1,
            duration: 1.5,
            delay: 1,
            x: 0,
            stagger: 0.3,
          });
        },
      },
    });
  }, [userData]);

  if (!userAbout) {
    return <div clas>Loading...</div>;
  }

  if (!userData.services) {
    return <div>1sec.. Loading userData....</div>;
  }
  const skillArray = userData.skills;
  const sortedSkillArray = skillArray.sort((a, b) => a.sequence - b.sequence);

  return (
    <>
      <section className='flex flex-col items-center justify-center'>
        <div className=' flex flex-col justify-start w-[45%]  mt-20 max-sm:w-[100%] max-sm:px-2 '>
          <p
            id='text-1'
            className=' translate-x-10 opacity-0 text-3xl  text-gray-300 font-semibold'>
            Introduction
          </p>
          <h2
            id='text-2'
            className='translate-x-10 opacity-0 text-7xl  text-purple-600 font-bold'>
            Overview.
          </h2>
          <p
            id='text-3'
            className=' mt-4 text-gray-700 text-xl max-sm:text-sm opacity-0 translate-y-20 max-sm:w-[90%] leading-[30px]   '>
            {userAbout.description}
          </p>
        </div>

        <div className='flex flex-col justify-center items-center w-[45%] mt-20'>
          <h1
            id='text-4'
            className='translate-x-10 opacity-0 text-6xl  text-gray-700 font-bold'>
            Services
          </h1>
        </div>
        <div className='mt-10 grid grid-cols-3 gap-10  max-lg:flex max-lg:flex-col  max-sm:w-[50%] max-sm:flex max-sm:flex-col max-sm:items-center  '>
          {userData.services.map((service, index) => (
            <div className='show-card opacity-0 '>
              <ServiceCard key={service.name} index={index} {...service} />
            </div>
          ))}
        </div>
        <div className='bg-[#f5f5f5] w-full mt-20'>
          <Exprience />
        </div>
        <div className='w-3/4 flex flex-col gap-10 mt-20  max-sm:w-full'>
          <h1 className='text-7xl'>Skills:</h1>

          <div className='flex flex-row flex-wrap justify-center gap-10 m-20 max-sm:m-0'>
            {sortedSkillArray.map((skill) => (
              <div
                id='skill'
                className=' translate-x-5 opacity-0  skill-shadow w-28 h-28 px-7 py-7 border rounded-full overflow-hidden flex flex-col items-center justify-center max-sm:rounded-xl '
                key={skill.name}>
                <div
                  className='  flex flex-col items-center  hover:cursor-pointer'
                  title={skill}>
                  <img
                    src={skill.image.url}
                    alt={skill.name}
                    className=' w-10 h-10'
                  />
                  <h1 className='text-xl'>{skill.name}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
