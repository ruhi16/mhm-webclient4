import React from 'react'
import ServiceItem from './ServiceItem'

import { Services } from './Services'

function ServiceGrid() {
  return (
    <div className='bg-indigo-300 py-10 text-center'>
        <div className='mx-auto max-w-5xl px-6 sm:px-8 md:px-12'>
            <h2 className='text-2xl font-semibold md:text-3xl'>Services</h2>
            <p className='mx-auto mt-3 max-w-xl text-sm' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, eos quos aperiam impedit nulla dolorum neque minus quam repellat provident illo et incidunt. Ex odio mollitia dicta expedita magni autem.</p>
            
            <div className='mt-12 mx-auto grid gird-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'>
                {
                  Services.map((service)=>(
                    <div>                
                      <ServiceItem service={service}/>
                    </div>
                  ))                
                }
               
            </div>
        </div>
    
    </div>
  )
}

export default ServiceGrid