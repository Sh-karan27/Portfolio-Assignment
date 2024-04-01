import React, { useEffect } from 'react';
import { useUserAboutData } from '../UserDataContexts/UserAboutContext';
import gsap from 'gsap';
import ComputerCanvas from './Computers';

const Home = () => {
  const userAbout = useUserAboutData();

  useEffect(() => {
    if (!userAbout) return;

    gsap.to('#userData', { opacity: 1, x: 0, duration: 1, delay: 2 });
    gsap.to('#HeroImg', { opacity: 1, y: 0, duration: 1, delay: 1.5 });
    gsap.to('#DesktopPC', { opacity: 1, y: 0, duration: 1, delay: 2.5 });
  }, [userAbout]);

  if (!userAbout) {
    return <div clas>Loading...</div>;
  }

  if (!userAbout.avatar || !userAbout.avatar.url) {
    return <div className='text-black'>Loading...</div>;
  }

  return (
    <section className='mt-20 w-full h-full flex-col gap-20 flex items-center justify-center relative max-sm:gap-0 max-sm:mt-0'>
      <div className='w-3/4 flex items-start justify-center gap-10  max-sm:flex-col'>
        <img
          src={`${userAbout.avatar.url}`}
          alt='userImg'
          id='HeroImg'
          className=' w-[12%] rounded-l-full opacity-1 translate-y-20 opacity-0 max-sm:w-[10rem] max-md:w-[15rem] '
        />

        <div
          id='userData'
          className='flex items-start px-5 py-5 flex-col gap-7 translate-x-20 opacity-0  '>
          <h3 className='text-6xl'>
            Hi, I'm{' '}
            <span className='text-6xl  text-purple-600'>{userAbout.name}</span>
          </h3>
          <h1 className='text-3xl'>{userAbout.title}</h1>
          <span className='text-2xl'>{userAbout.subTitle}</span>
        </div>
      </div>
      <div
        className=' w-full opacity-0 translate-y-10 flex items-center justify-center'
        id='DesktopPC'>
        <ComputerCanvas />
      </div>
    </section>
  );
};

export default Home;
