import React from 'react';

const Footer = () => {
  return (
    <section className=' mt-20 w-full h-full flex items-center justify-center'>
      <div className='w-3/4  text-center'>
        <h1 className='text-gray-500 text-xs md:text-sm '>
          {' '}
          {new Date().getFullYear()} @Sh_Karan. All rights reserved
        </h1>
        <p className='text-xs md:text-sm  text-gray-500 '>Karan Shukla.</p>
      </div>
    </section>
  );
};

export default Footer;
