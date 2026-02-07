export const LOGO = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_gWZWU6bPo1sxiRno-nIWOjwhdYJ21WDVJQ&s'
export const MENU = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN1wWjzGD7bfaqxEELh-qOwQYIG-zbaptuhg&s';
export const USER_AVATAR = 'https://images.icon-icons.com/1378/PNG/512/avatardefault_92824.png';
export const SEARCH = 'search.svg';

export const YOUTUBE_API = (suggetion) =>  `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${suggetion}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;

export const YOUTUBE_SEARCH_API = (query) => {
    return 'http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q='+query;
}

export const LIVE_CHAT = 25;