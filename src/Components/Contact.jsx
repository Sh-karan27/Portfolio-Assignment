import React, { useRef, useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    alert('I  will get back to you ASAP');
    setForm({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <section className='w-full h-full flex items-center justify-center'>
      <div className='m-20  max-w-screen-lg mx-auto h-full flex  flex-col items-center justify-center gap-20'>
        <div className='flex items-start flex-col w-full'>
          <h1 className=' text-6xl text-purple-700'>
            I'd love to hear from you.
          </h1>
          <p className='text-2xl text-gray-500'>
            Got a project you would like me to work on? Or how about just a
            friendly chat?
          </p>
        </div>
        <div className='flex items-center justify-center gap-20 w-full'>
          <div className='w-[30rem] h-full flex flex-col items-start gap-5 overflow-hidden bg-gray-500 px-10 py-10'>
            <h1 className='text-4xl text-purple-500'>Get in touch</h1>
            <form
              onSubmit={handleSubmit}
              action='https://formspree.io/f/mzbnjkyj'
              method='POST'
              className='mt-12 flex flex-col gap-8 w-full'>
              <label className='flex flex-col'>
                <span className=' font-medium mb-4'>Your name</span>
                <input
                  className=' font-medium border-none py-4 px-6 placeholder:text-purple-500 rounded-lg outline-none'
                  type='text'
                  name='name'
                  onChange={handleChange}
                  value={form.name}
                  placeholder="What's your name?"
                />
              </label>
              <label className='flex flex-col'>
                <span className=' font-medium mb-4'>Your Email</span>
                <input
                  onChange={handleChange}
                  className=' font-medium border-none py-4 px-6 placeholder:text-purple-500 rounded-lg outline-none'
                  type='email'
                  name='email'
                  value={form.email}
                  placeholder="What's your email?"
                />
              </label>
              <label className='flex flex-col'>
                <span className=' font-medium mb-4'>Your message.</span>
                <textarea
                  value={form.message}
                  onChange={handleChange}
                  rows='7'
                  className=' font-medium border-none py-4 px-6 placeholder:text-purple-500 rounded-lg outline-none'
                  name='message'
                  placeholder='What do you want to say?'
                />
              </label>
              <button
                value='Send'
                type='submit'
                className=' outline-none w-fit py-3 px-8 font-bold  bg-white rounded-lg text-purple-500'>
                Send
              </button>
            </form>
          </div>
          <div className='w-[30rem] h-[30rem] border'></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
