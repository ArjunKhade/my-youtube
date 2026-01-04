import React from 'react'

const VideoCard = ({info}) => {

    console.log(info);

    if (!info) {
        return <div>Loading...</div>;
    }

    const { snippet } = info;
    const {channelTitle, thumbnails, title} = snippet;
    
  return (
    <div className='p-2 m-2 w-72 shadow'>
        <img className='rounded-lg' src={thumbnails?.medium?.url} alt='thumbnail'></img>
        <ul>
            <li className='font-bold'>{title}</li>
            <li>{channelTitle}</li>
        </ul>
    </div>
  )
}

export default VideoCard