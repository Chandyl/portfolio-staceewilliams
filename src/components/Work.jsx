import React from 'react'
import work1 from '../assets/work1.png';
import work2 from '../assets/work2.png';
import icecream from '../assets/icecream.png'
import realEstate from '../assets/realestate.jpg'
import WorkImg from '../assets/workImg.jpeg'


const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-1'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Work
          </p>
          <p className='py-6 font-bold text-lg'> Check out some of my recent work</p>
        </div>
      {/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-2'>

        <div
            style={{ backgroundImage: `url(${work1})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-xl font-bold text-white tracking-wider'>
                Bitcoin-Price Application
              </span>
              <div className='pt-8 text-center'>
                <a href='https://chandyl.github.io/my-crypto-project/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                  </a>
                <a href='https://github.com/Chandyl/my-crypto-project'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${work2})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-xl font-bold text-white tracking-wider'>
                Google-Momentum-Clone 
              </span>
              <div className='pt-8 text-center'>
                <a href='https://chandyl.github.io/momentum-clone/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/Chandyl/momentum-clone'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
             {/* Grid Item */}
             <div
            style={{ backgroundImage: `url(${icecream})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-xl font-bold text-white tracking-wider'>
               Responsive Website
              </span>
              <div className='pt-8 text-center'>
                <a href='https://chandyl.github.io/ice-cream/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/Chandyl/ice-cream'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          
           
           <div
           style={{ backgroundImage: `url(${WorkImg})` }}
           className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
         >
           {/* Hover Effects */}
           <div className='opacity-0 group-hover:opacity-100'>
             <span className='text-xl font-bold text-white tracking-wider'>
               React JS Application
             </span>
             <div className='pt-8 text-center'>
               <a href='/'>
                 <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                   Demo
                 </button>
               </a>
               <a href='/'>
                 <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                   Code
                 </button>
               </a>
             </div>
           </div>
         </div>
         <div
           style={{ backgroundImage: `url(${realEstate})` }}
           className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
         >
           {/* Hover Effects */}
           <div className='opacity-0 group-hover:opacity-100'>
             <span className='text-lg font-bold text-white tracking-wider'>
               Coming soon House Marketplace 
             </span>
             <div className='pt-8 text-center'>
               <a href='/'>
                 <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                   Demo
                 </button>
               </a>
               <a href='/'>
                 <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                   Code
                 </button>
               </a>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
 );
};



export default Work