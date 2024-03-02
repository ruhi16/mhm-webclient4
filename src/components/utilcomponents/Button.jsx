import React from 'react'

const Button = (props) => {
  return (
    <button type='button' className='bg-indigo-500 text-white rounded py-2 px-6 md:ml-8 hover:bg-indigo-800 duration-500'>
        {props.children}
    </button>
  )
}

export default Button