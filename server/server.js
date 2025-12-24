import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import { clerkMiddleware } from '@clerk/express'
import { serve } from "inngest/express";
import { inngest, functions } from "./inngest/index.js"

const app=express();
//middleware
//comment check
app.use(express.json());

app.use(cors());
//test route
app.get("/", (req, res)=>{
    res.send('SERVER IS LIVE!')
});
app.use("/api/inngest", serve({ client: inngest, functions }));

export default app;

/*
const PORT = process.env.PORT || 5050;


app.listen(PORT, ()=> {
    console.log(`SERVER IS RUNNING ON PORT ${ PORT }`)}
);
*/ 