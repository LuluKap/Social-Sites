const usernames = [
    'user1',
    'user2',
    'user3',
    'user4',
    'user5',
];

const email = [
    'user1@mail.com',
    'user2@mail.com',
    'user3@mail.com',
    'user4@mail.com',
    'user5@mail.com',
];

const thoughts = [
    'I am a thought',
    'I love soup',
    'I love pizza',
    'Birds are fake',
    'I love the smell of napalm in the morning',
];

const friends = [
    'friend1',
    'friend2',
    'friend3',
    'friend4',
    'friend5',
];

const genRandomIndex = (arr) => Math.floor(Math.random() * arr.length);

const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getRandomUsername = () =>
  `${getRandomArrItem(usernames)}${Math.floor(Math.random() * 10 + 1)}`;

const getRandomEmail = () =>
  `${getRandomArrItem(email)}${Math.floor(Math.random() * 10 + 1)}`;

const getRandomThought = () =>
    `${getRandomArrItem(thoughts)}${Math.floor(Math.random() * 10 + 1)}`;

const getRandomFriend = () =>
    `${getRandomArrItem(friends)}${Math.floor(Math.random() * 10 + 1)}`;  


// Export the functions for use in seed.js
module.exports = {
  getRandomUsername,
    getRandomEmail,
    getRandomThought,
    getRandomFriend,
    genRandomIndex,
};
