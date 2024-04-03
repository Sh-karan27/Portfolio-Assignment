import React, { useRef, useState } from 'react';
import { useUserData } from '../UserDataContexts/UserData';
import { useUserAboutData } from '../UserDataContexts/UserAboutContext';
import { IoIosCall } from 'react-icons/io';
import { IoLocationSharp } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
const Contact = () => {
  // const [form, setForm] = useState({
  //   name: '',
  //   email: '',
  //   message: '',
  // });

  const userData = useUserData();
  const userAbout = useUserAboutData();

  useGSAP(() => {
    gsap.to('#contact-p', {
      opacity: 1,
      y: 0,
      delay: 2,
    });
    gsap.to('#contact-h1', {
      opacity: 1,
      y: 0,
      delay: 1.7,
    });

    gsap.to('#form, #social', {
      opacity: 1,
      delay: 2.3,
      x: 0,
      stagger: 0.5,
    });
  }, [userData]);
  const social = userData.social_handles;
  if (!social) {
    return <div>Loading...</div>;
  }
  if (!userAbout) {
    return <div>Loading...</div>;
  }

  // const handleChange = (e) => {
  //   const { target } = e;
  //   const { name, value } = target;

  //   setForm({
  //     ...form,
  //     [name]: value,
  //   });
  // };
  const handleSubmit = (e) => {
    e.preventDefault();

    alert('I  will get back to you ASAP');
  };

  return (
    <section className='w-full h-full flex items-center justify-center'>
      <div className='mt-20  max-w-screen-lg mx-auto h-full flex  flex-col items-center justify-center gap-20 '>
        <div className='flex items-center gap-10 flex-col w-full max-sm:w-3/4 max-lg:w-3/4'>
          <h1
            id='contact-h1'
            className=' translate-y-10 opacity-0 text-6xl text-purple-500'>
            I'd love to hear from you.
          </h1>
          <p
            id='contact-p'
            className='translate-y-10 opacity-0 text-2xl text-gray-500'>
            Got a project you would like me to work on? Or how about just a
            friendly chat?
          </p>
        </div>
        <div className='flex items-center justify-center gap-20 w-full max-lg:flex-col max-lg:gap-5 max-sm:flex-col '>
          <div
            id='form'
            className='  translate-x-20 opacity-0  w-[30rem] h-full flex flex-col items-start gap-5 project-shadow overflow-hidden bg-gray-500 px-10 py-10 max-sm:w-[23rem]'>
            <h1 className='text-4xl text-purple-500'>Get in touch</h1>
            <form
              onSubmit={handleSubmit}
              action='https://formspree.io/f/mzbnjkyj'
              method='POST'
              className=' mt-12 flex flex-col gap-8 w-full'>
              <label className='flex flex-col '>
                <span className=' text-purple-500 font-medium mb-4'>
                  Your name
                </span>
                <input
                  autoComplete='off'
                  className=' project-shadow font-medium border-none py-4 px-6 placeholder:text-gray-500 rounded-lg outline-none'
                  type='text'
                  name='name'
                  // onChange={handleChange}
                  // value={form.name}
                  placeholder="What's your name?"
                />
              </label>
              <label className='flex flex-col'>
                <span className=' text-purple-500 font-medium mb-4'>
                  Your email
                </span>
                <input
                  autoComplete='off'
                  // onChange={handleChange}
                  className='project-shadow font-medium border-none py-4 px-6 placeholder:text-gray-500 rounded-lg outline-none'
                  type='email'
                  name='email'
                  // value={form.email}
                  placeholder="What's your email?"
                />
              </label>
              <label className='flex flex-col'>
                <span className=' text-purple-500 font-medium mb-4'>
                  Your message
                </span>
                <textarea
                  // value={form.message}
                  // onChange={handleChange}
                  rows='7'
                  className=' project-shadow font-medium border-none py-4 px-6 placeholder:text-gray-500 rounded-lg outline-none'
                  name='message'
                  placeholder='What do you want to say?'
                />
              </label>
              <button
                type='submit'
                className=' project-shadow outline-none w-fit py-3 px-8 font-bold  bg-white rounded-lg text-purple-500'>
                Send
              </button>
            </form>
          </div>
          <div
            id='social'
            className='translate-x-20 opacity-0 w-[30rem] h-[30rem] flex flex-col items-center justify-center gap-20'>
            <div className='flex items-center justify-center gap-10'>
              <IoIosCall className='text-purple-500 text-2xl' />{' '}
              <span className='text-gray-500 text-xl'>
                {userAbout.phoneNumber}
              </span>
            </div>
            <div className='flex items-center justify-center gap-10'>
              <IoLocationSharp className='text-purple-500 text-2xl' />{' '}
              <span className='text-gray-500 text-xl'>{userAbout.address}</span>
            </div>
            <div className='flex items-center justify-center gap-10'>
              <MdEmail className='text-purple-500 text-2xl' />{' '}
              <span className='text-gray-500 text-xl'>
                {userAbout.contactEmail}
              </span>
            </div>

            <h1 className='text-purple-500 text-3xl'>Socials</h1>
            <div className='w-3/4  flex items-center justify-center gap-10'>
              {social.map((social) => (
                <div
                  key={social.platform}
                  className='flex flex-col  items-center justify-center'>
                  <img
                    src={social.image.url}
                    alt={social.namme}
                    className='w-7 h-7'
                  />
                  <h1 className='text-gray-500'>{social.platform}</h1>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
