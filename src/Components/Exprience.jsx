import React from 'react';
import { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/all';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useUserData } from '../UserDataContexts/UserData';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
const Exprience = () => {
  const userData = useUserData();
  if (!userData.timeline) {
    return <div>1sec.. Loading userData....</div>;
  }

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  useGSAP(() => {
    gsap.to('#services', {
      duration: 0.5,
      ease: 'power2.out',

      scrollTrigger: {
        trigger: '#services',
        start: 'top bottom', // Start animation when the center of the element reaches the bottom of the viewport
        end: 'bottom center', // End animation when the center of the element reaches the center of the viewport
        scrub: true,
        onEnter: () => {
          // Define animation to run when the element enters the scroll trigger
          gsap.to('#services', {
            opacity: 1,
            duration: 1.5,
            delay: 1,
            x: 0,
          });
        },
      },
    });
  }),
    [];

  return (
    <div className='flex flex-col items-center justify-center gap-20 px-5 py-5'>
      <h1
        id='services'
        className='text-7xl text-gray-700 opacity-0 translate-x-5'>
        Work Experience
      </h1>
      <VerticalTimeline>
        {userData.timeline.map((element) => {
          const endDate = new Date(element.endDate).toLocaleDateString();

          const startDate = new Date(element.startDate).toLocaleDateString();

          return (
            <VerticalTimelineElement
              key={element.company_name}
              date={` ${startDate} - ${endDate}`}
              iconStyle={{
                backgroundColor: 'rgb(55 65 81)',
              }}
              dateClassName='date'>
              <div>
                <h1 className=' text-xl font-semibold text-purple-600'>
                  {element.jobTitle}
                </h1>
                <h3 className=' text-gray-700 text-xl '>
                  {element.company_name}
                </h3>
                <h5 className='text-gray-700 '>{element.jobLocation}</h5>
                <p className=' text-gray-500'>{element.summary}</p>
                <button className=' underline text-purple-500'>
                  View Projects
                </button>
              </div>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};

export default Exprience;
