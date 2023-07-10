const express = require('express');
const app = express();
const tasks = require('./tasks');
const connectDB = require('./connect');
require('dotenv').config();
const errors= require('./errors');
const cors =require('cors');







app.use(express.json(),cors());

app.use('/api/v1/todos', tasks);
app.use(errors)


const port = process.env.PORT || 8080;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();