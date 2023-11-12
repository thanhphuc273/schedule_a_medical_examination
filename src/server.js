import express from "express";
import bodyParser from "body-parser";
// query param /user?id=7 laays id =7
import viewEngine from "./config/viewEngine";
import initWebRouter  from "./route/web";
import connectDB from './config/connectDB'

require('dotenv').config();

let app=express();

//config app

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

//khai bao link
viewEngine(app);
initWebRouter(app); 

connectDB()

let port=process.env.PORT || 6969 ;
//Port ===undefined => port=6969
app.listen(port, ()=>{
    //callback
    console.log("backend nodejs is running")
});