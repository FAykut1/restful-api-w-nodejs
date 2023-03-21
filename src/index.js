const mongoose = require('mongoose');
const express = require('express');

require('dotenv').config();

const app = express();

app.get('/', (req, res) => {
  res.send('Hello');
})

app.listen(Number(process.env.EXPRESS_PORT) ,() => {
  console.log(`Express server started on ${process.env.EXPRESS_PORT}`);
})

// main().catch(err => console.log(err));

async function main() {
  // await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@restfulapi.m4pjtym.mongodb.net/?retryWrites=true&w=majority`);
  
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}