import React from 'react'
import { LOGO, MENU, SEARCH, USER_AVATAR } from '../../constant/constant'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../../store/appSlice';

const Head = () => {

  const dispatch = useDispatch();

  const handleToggle = () => {
     dispatch(toggleMenu());
  }

  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
    <div className='flex col-span-1'>
      <img onClick={() => handleToggle()} className='h-8 cursor-pointer' src={MENU} alt='hamberger'/>
      <img className='h-8 mx-3 cursor-pointer' src={LOGO} alt='logo'/>
    </div>

    <div className='col-span-10 align-middle'>
        <input className='w-1/2 border border-gray-400 p-2 rounded-l-full' type='text'></input>
        <button className='border border-gray-400 p-2 px-3 rounded-r-full' >
          {/* <img className='h-5' src={SEARCH} alt='search'/> */}
          🔍
        </button>
    </div>

    <div className='col-span-1'>
      <img className='h-10' src={USER_AVATAR} alt='avatar'/>
    </div>

    </div>

  )
}   

export default Head