import express from"express";



//function theo es6
//var global phai kiem soat ,let trong file
let configViewEngine=(app)=>{
    //arrow function
    // cau hinh link public
    app.use(express.static("./src/public"))
    app.set("view engine","ejs"); //jsp,blade
    app.set("views","./src/views")
    
}

module.exports=configViewEngine;