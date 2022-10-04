import express from 'express';
// import Connection from './database/db.js';
// import DefaultData from './default.js';
import Route from './routes/route.js';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

app.use(cors());
app.use('/',Route);

const PORT = process.env.PORT || 8000;

// const username = process.env.DB_USERNAME;
// const password = process.env.DB_PASSWORD;
if(process.env.NODE_ENV === 'production')
{
     app.use(express.static("client/build"));
}




app.listen(PORT,()=>{

     console.log(`Server Started SuccessFully on PORT ${PORT}`);
  
});

