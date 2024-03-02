import React from 'react'

// import {prof} from "../../../assets/edu1.png";


function TeacherCard({teacher}) {
  return (
    <>        
      <div className='card w-48 lg:w-72 mx-auto border-2 border-indigo-400 rounded-xl px-4 pb-5 m-auto gap-4'>
        
        <div>
          <img src={teacher.imgurl}
            alt='' className='w-32 h-32 mx-auto rounded-full border-8 border-white '/>
        </div>
        <div className='text-center text-xl font-bold'>
          <h3>{teacher.name}</h3>
        </div>
        <div className='text-center text-sm '>
          <h3>Computer Science</h3>
        </div>
        <div className='py-5'>
          <hr className='w-full' />
        </div>
        <div className='text-center text-xl font-semibold flex flex-wrap items-center gap-4'>
          <div className='bg-blue-500 w-8 h-8 rounded-full flex items-center justify-center'>
              {/* <CheckIcon className='w-6'/> */}
          </div>
          <div className='bg-blue-500 w-8 h-8 rounded-full flex items-center justify-center'>
              {/* <CheckIcon className='w-6'/> */}
          </div>
        </div>
    </div>
    </>
  )
}

export default TeacherCard