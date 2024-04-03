import React from 'react';
import { useUserData } from '../UserDataContexts/UserData';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ServicesPageCard from './ServicesPageCard';
const Services = () => {
  const userData = useUserData();

  useGSAP(() => {
    gsap.to('#service-h1', {
      opacity: 1,
      y: 0,
      delay: 1,
    });
  }, [userData]);
  if (!userData.services) {
    return <div>1sec.. Loading userData....</div>;
  }
  const Services = userData.services;

  return (
    <section className='w-full h-full flex items-center justify-center relative'>
      <div className='m-10  max-w-screen-lg mx-auto h-full flex flex-col items-center justify-center'>
        <div className='m-10  max-w-screen-lg mx-auto h-full flex flex-col items-center justify-center'>
          <h1
            id='service-h1'
            className=' translate-y-5 opacity-0 text-7xl text-purple-700'>
            Services
          </h1>
        </div>

        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-lg:grid-cols-1 m-10 gap-20 justify-center'>
          {Services.map((service) => (
            <ServicesPageCard
              name={service.name}
              img={service.image.url}
              charge={service.charge}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
