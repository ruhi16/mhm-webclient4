import { Button, Carousel } from 'flowbite-react'
import React from 'react'

import { School } from './data'

const HomeItem = ({info}) => {
  return (
    <>   
        <div className='flex flex-col md:flex md:flex-row items-center justify-end p-12 '>
          <div className='items-center bg-red-500 grid place-items-center md:place-content-start'>            
            {/* <div className=''> */}
                <h1 className='text-2xl bg-slate-500 md:text-5xl  font-semibold mb-4 text-slate-500-500 w-3/4 text-center md:text-left'>
                {info.title}
                </h1>
                
                <div className='bg-red-500 justify-start'>
                    <Button>Announcement</Button>
                </div>
            {/* </div> */}
            <p>{info.subtitle}</p>
          </div>
          <div>            
            <img 
              className="object-contain shadow-lg rounded-lg p-4 w-auto"
              src={info.imgurl} 
              alt=""  />
          </div>          
        </div>         
    </>
  )
}

export default HomeItem