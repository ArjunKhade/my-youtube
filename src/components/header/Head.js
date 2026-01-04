import React, { useEffect, useState } from 'react'
import { LOGO, MENU, USER_AVATAR, YOUTUBE_SEARCH_API } from '../../constant/constant'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../../store/appSlice';
import { Link } from 'react-router-dom';
import { cacheSearch } from '../../store/searchSlice';

const Head = () => {
 
   const [query, setQuery]= useState("");
   const [suggetions, setSuggetions]= useState([]);
   const [showSuggetions, setShowSuggetions]= useState(false);
   const dispatch = useDispatch();
   const searchCache = useSelector((store) => store.search);

   useEffect(()=> {
    //make api call with debouncing 
    //if the diff between two keystroke is <200ms cancel the api call
    const timer = setTimeout(() => {
      if (searchCache[query]) {
        setSuggetions(searchCache[query]);
      } else {
        searchQuery();
      }
    }, 200);  
   
    //it will clears the existing timeout cleanup action if any keystroke is happen in 200ms
    return() => {
     clearTimeout(timer);
    }
   },[query])

   /** makes the call to youtubes suggetion API */
   const searchQuery = async () => {
    
     console.log("API CALL",query);
     const data = await fetch(YOUTUBE_SEARCH_API(query));
     const json = await data.json();
    //  console.log(json[1])
     setSuggetions(json[1]);

     //update cache after api call
     dispatch(cacheSearch({
      [query]: json[1]
     }))

   }

  const handleToggle = () => {
     dispatch(toggleMenu());
  }

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => handleToggle()}
          className="h-8 cursor-pointer"
          src={MENU}
          alt="hamberger"
        />
        <Link to="/">
          <img className="h-8 mx-3 cursor-pointer" src={LOGO} alt="logo" />
        </Link>
      </div>

      <div className="col-span-10 align-middle">
        <div className='relative'>
          <input
            className="w-1/2 border border-gray-400 p-2 px-4 rounded-l-full"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={()=> setShowSuggetions(true)}
            onBlur={()=> setShowSuggetions(false)}
          ></input>
          {/* <img className='absolute top-6 w-[24px] h-[24px]' src={SEARCH} alt='search'/> */}
          <button className="border border-gray-400 p-2 px-3 rounded-r-full">
            🔍
          </button>
        </div>

       { showSuggetions && <div className='absolute bg-white p-4 px-4 w-[33rem] shadow-lg border border-gray-100 rounded-lg'>
          <ul>
            {suggetions.map((s)=> 
            <li key={s} className='py-2 px-2 shadow-sm hover:bg-gray-100'>🔍 {s} </li>
            )}
          </ul>
        </div>}



      </div>

      <div className="col-span-1">
        <img className="h-10" src={USER_AVATAR} alt="avatar" />
      </div>
    </div>
  );
}   

export default Head