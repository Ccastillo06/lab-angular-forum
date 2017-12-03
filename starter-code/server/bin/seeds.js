const mongoose = require('mongoose');
const Thread = require('../models/thread.model');

const dbName = 'forum-development'
mongoose.connect(`mongodb://localhost/${dbName}`);

const threads = [
  {
    title: 'Oh yeah im working',
    content: 'I\'m a fu***ng thread',
    date: new Date(),
  },
  {
    title: 'Yo mama',
    content: 'is so fat she has her own gravitational field',
    date: new Date(),
  }
]

Thread.create( threads)
  .then(() => { console.log('Created threads'); })
  .catch( err => { throw(err) });
