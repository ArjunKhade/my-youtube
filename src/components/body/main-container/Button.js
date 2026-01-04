import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className='py-2 rounded-lg px-8 m-4 bg-gray-100'>{name}</button>
    </div>
  )
}

export default Button