import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Tilt } from 'react-tilt';

const ServiceCard = ({ index, image, name }) => {
  // console.log(name);
  return (
    <NavLink to='/services'>
      <Tilt className=' xs:w-[250px]  w-[20rem] box-shadow'>
        <div className=' w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
          <div className='cursor-pointer  bg-[#fff] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
            <img
              src={image.url}
              alt={name}
              className='w-full h-full object-contain rounded-full '
            />
            <h3 className='text-[#ac46a1]  text-xl font-bold text-center'>
              {name}
            </h3>
          </div>
        </div>
      </Tilt>
    </NavLink>
  );
};

export default ServiceCard;
