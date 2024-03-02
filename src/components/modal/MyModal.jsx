import React from 'react'

function MyModal({ visible, onClose}) {
  if(!visible) return null

  const handleOnClose = (e) =>{
    if(e.target.id === 'mycontainer') {
      onClose()
    }
  }

  return (
    <div id='mycontainer' onClick={handleOnClose} className='fixed inset-0 z-50 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center '>
        
          <div className='bg-red-500 p-2 rounded text-5xl'>My Modal</div>
          <button onClick={onClose}>X</button>
          
          
    </div>
  )
}

export default MyModal