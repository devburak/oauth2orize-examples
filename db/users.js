'use strict';

const users = [
  {
      id: 'eb0d9217-6c31-MYDI-b976-0fc9c6477adf',
      username: 'deneme',
      password: 'password',
      email: 'email',
      name:'deneme3',
      role:6
  },
  {
      id: '4065d7c1-063b-MYDI-ae99-3978d0b800f2',
      username: 'username',
      password: 'password',
      email: 'email',
      name:'deneme2',
      role:1
  },
  {
      id: '92adbc82-7bb9-MYDI-b9a9-9573b0a25451',
      username: 'deneme',
      password: '8888',
      email: 'email',
      name:'deneme',
      role:1
  },
]

module.exports.findById = (id, done) => {
  for (let i = 0, len = users.length; i < len; i++) {
    if (users[i].id === id) return done(null, users[i]);
  }
  return done(new Error('User Not Found'));
};

module.exports.findByUsername = (username, done) => {
  for (let i = 0, len = users.length; i < len; i++) {
    if (users[i].username === username) return done(null, users[i]);
  }
  return done(new Error('User Not Found'));
};
