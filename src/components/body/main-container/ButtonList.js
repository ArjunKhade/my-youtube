import React from 'react'
import Button from './Button'

const ButtonList = () => {
  const buttonNames = ["All", "Songs", "Gaming", "Cricket", "Movies", "Food", "Cooking", "News", "Sports", "Technology", "Comedy", "Travel", "Education"];

  return (
    <div className='flex flex-wrap'>
      {buttonNames.map((name, index) => (
        <Button key={index} name={name} />
      ))}
    </div>
  )
}

export default ButtonList