import { Card } from 'flowbite-react'
import React from 'react'

function ServiceItem({service}) {
  return (
    <div className=''>
        <Card href="#" className="max-w-sm">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 line-clamp-1">
        {service.title}
      </h5>
      <p className="font-normal text-gray-700 line-clamp-3">
        {service.description}
      </p>
    </Card>
    </div>
  )
}

export default ServiceItem