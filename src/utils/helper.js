
var nameList = [
  'Time', 'Past', 'Future', 'Dev',
  'Fly', 'Flying', 'Soar', 'Soaring', 'Power', 'Falling',
  'Fall', 'Jump', 'Cliff', 'Mountain', 'Rend', 'Red', 'Blue',
  'Green', 'Yellow', 'Gold', 'Demon', 'Demonic', 'Panda', 'Cat',
  'Kitty', 'Kitten', 'Zero', 'Memory', 'Trooper', 'XX', 'Bandit',
  'Fear', 'Light', 'Glow', 'Tread', 'Deep', 'Deeper', 'Deepest',
  'Mine', 'Your', 'Worst', 'Enemy', 'Hostile', 'Force', 'Video',
  'Game', 'Donkey', 'Mule', 'Colt', 'Cult', 'Cultist', 'Magnum',
  'Gun', 'Assault', 'Recon', 'Trap', 'Trapper', 'Redeem', 'Code',
  'Script', 'Writer', 'Near', 'Close', 'Open', 'Cube', 'Circle',
  'Geo', 'Genome', 'Germ', 'Spaz', 'Shot', 'Echo', 'Beta', 'Alpha',
  'Gamma', 'Omega', 'Seal', 'Squid', 'Money', 'Cash', 'Lord', 'King',
  'Duke', 'Rest', 'Fire', 'Flame', 'Morrow', 'Break', 'Breaker', 'Numb',
  'Ice', 'Cold', 'Rotten', 'Sick', 'Sickly', 'Janitor', 'Camel', 'Rooster',
  'Sand', 'Desert', 'Dessert', 'Hurdle', 'Racer', 'Eraser', 'Erase', 'Big',
  'Small', 'Short', 'Tall', 'Sith', 'Bounty', 'Hunter', 'Cracked', 'Broken',
  'Sad', 'Happy', 'Joy', 'Joyful', 'Crimson', 'Destiny', 'Deceit', 'Lies',
  'Lie', 'Honest', 'Destined', 'Bloxxer', 'Hawk', 'Eagle', 'Hawker', 'Walker',
  'Zombie', 'Sarge', 'Capt', 'Captain', 'Punch', 'One', 'Two', 'Uno', 'Slice',
  'Slash', 'Melt', 'Melted', 'Melting', 'Fell', 'Wolf', 'Hound',
  'Legacy', 'Sharp', 'Dead', 'Mew', 'Chuckle', 'Bubba', 'Bubble', 'Sandwich', 'Smasher', 'Extreme', 'Multi', 'Universe', 'Ultimate', 'Death', 'Ready', 'Monkey', 'Elevator', 'Wrench', 'Grease', 'Head', 'Theme', 'Grand', 'Cool', 'Kid', 'Boy', 'Girl', 'Vortex', 'Paradox'
];
export function generateRandomName() {
return nameList[Math.floor(Math.random() * nameList.length)];
};



export function generateGUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : ((r & 0x3) | 0x8);
    return v.toString(16);
  });
};

var messageList = [
  'Hello! How are you today? 😊',
  'Great video! Really enjoyed it. 👍',
  'Thanks for sharing this content. 🙏',
  'This is amazing! Keep it up. 🔥',
  'Interesting perspective on this topic. 🤔',
  'Well explained, very helpful. 💡',
  'Love the way you presented this. ❤️',
  'This changed my view on the subject. 🤯',
  'Fantastic work! Subscribed. 🔔',
  'Can you make more videos like this? 🎥',
  'This deserves more views! 👀',
  'Brilliant explanation. 🧠',
  'You make complex topics simple. ✨',
  'This is exactly what I needed. 🎯',
  'Your content is top-notch. 👑',
  'Really appreciate your effort. 🙌',
  'This video is a game changer. 🚀',
  'Clear and concise presentation. 📋',
  'You have a great teaching style. 👨‍🏫',
  'This helped me understand better. 💭',
  'Awesome content as always. 🌟',
  'Keep creating such valuable content. 📈',
  'This is pure gold! 🏆',
  'You explain things so well. 🎓',
  'This video is worth watching. ⏰',
  'Impressive work! 👏',
  'Your videos are always informative. 📚',
  'This is very well done. ✅',
  'Thanks for the insights. 🤝',
  'This is incredibly useful. 🔧'
];

export function generateRandomMessage() {
  return messageList[Math.floor(Math.random() * messageList.length)];
};