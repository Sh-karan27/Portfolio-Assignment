import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RxCross1 } from 'react-icons/rx';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Navbar = () => {
  const [active, setActive] = useState(null);
  const [smallMenu, setSmallMenu] = useState(false);

  useGSAP(() => {
    gsap.to('#Nav', {
      opacity: 1,
      delay: 1,
      x: 0,
      duration: 1,
      stagger: 0.1,
    });
  }, []);
  const handleOnClick = () => {
    setActive('active ');
  };
  const toggleMenu = () => {
    setSmallMenu(!smallMenu);
  };
  return (
    <header className='w-full py-5 sm:py-10 px-5 flex justify-between items-center'>
      <nav className='flex w-full screen-max-width'>
        <div className='flex flex-1 justify-center max-sm:hidden'>
          {['home', 'about', 'services', 'project', 'contact'].map((nav) => (
            <NavLink to={nav === 'home' ? '/' : `/${nav}`} key={nav}>
              <div
                id='Nav'
                onClick={() => handleOnClick}
                className={`${active} opacity-0 text-lg translate-x-10 px-5 cursor-pointer  hover:underline  `}>
                {nav.charAt(0).toUpperCase() + nav.slice(1)}
              </div>
            </NavLink>
          ))}
        </div>
        <div className='flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1 relative'>
          <div className='relative'>
            {smallMenu ? (
              <RxCross1
                className='max-sm:flex text-lg cursor-pointer transform transition duration-500 ease-in-out'
                onClick={toggleMenu}
              />
            ) : (
              <GiHamburgerMenu
                className='hidden max-sm:flex text-lg cursor-pointer transform transition duration-500 ease-in-out'
                onClick={toggleMenu}
              />
            )}
          </div>
        </div>
        {smallMenu && (
          <div
            className='z-50 absolute top-20 left-0  mobile-nav w-full  flex items-center justify-center transition-transform duration-500 ease-in-out'
            style={{ transform: 'translateY(-100%)' }}>
            {['home', 'about', 'services', 'project', 'contact'].map((nav) => (
              <NavLink
                to={nav === 'home' ? '/' : `/${nav}`}
                key={nav}
                className='px-4 py-2 text-[10px] text-white hover:underline  '
                style={{ transition: 'transform 0.5s ease-in-out' }}>
                {nav.charAt(0).toUpperCase() + nav.slice(1)}
              </NavLink>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
