import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import { clerkMiddleware } from '@clerk/express'

const app=express();
//middleware
app.use(express.json());

app.use(cors());
app.use(clerkMiddleware());
//test route
app.get("/", (req, res)=>{
    res.send('SERVER IS LIVE!')
});
const PORT = process.env.PORT || 5050;


app.listen(PORT, ()=> {
    console.log(`SERVER IS RUNNING ON PORT ${ PORT }`)}
);