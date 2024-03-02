import { Carousel } from 'flowbite-react'
import React from 'react'
import HomeItem from './HomeItem'


import { School } from './data'

function Home() {
  return (
    <>    
    <div className='px-4  max-w-screen-2xl mx-auto min-h-[60vh] h-[60vh] bg-indigo-500'>
      <Carousel leftControl=" " rightControl=" " pauseOnHover className='w-full mx-auto'>
        {
          School.map((info)=>(
            <HomeItem key={info.title} info={info} />
          ))
        }
      </Carousel>

      </div>
    </>
  )
}

export default Home