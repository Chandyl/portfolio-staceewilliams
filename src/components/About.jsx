import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
       <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-1 gap-8'>
          <div className='sm:text-center pb-8 pl-4'>
            <p className='text-6xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
    </div>
    <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-1 gap-8 placeholder: px-4'>
            <div className='sm:text-center text-4xl font-bold'>
              <p>I'm Stacee, a recent web development grad with prior experience in the service industry. I am intrigued by traveling, technology, strategy and shopping. Currently, I am focused on React JS and building responsive websites, but still exploring other techologies and frameworks that catch my interest.  
                 
              </p>
            </div>
            <div>
            <p></p>  
            </div>
          </div>
      </div>
    </div>
  );
};
  
export default About