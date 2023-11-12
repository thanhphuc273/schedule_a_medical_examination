
import db from '../models/index';
import CRUDService from '../services/CRUDService'

let getHomePage = async (req,res)=>{
    try{
        let data= await db.User.findAll(); 
        // console.log('----------------')
        // console.log(data)
        // console.log('----------------')
        return res.render('homepage.ejs',{
            data: JSON.stringify(data)
        });

    }catch(e){
        console.log(e)
    } 
    return res.render("homepage.ejs")
} 

let getAboutPage =(req,res)=>{
    return res.render("test/about.ejs")
}

let getCRUD=(req,res)=>{
    return res.render('crud.ejs')
}
let postCRUD=async(req,res)=>{
    let message= await CRUDService.createNewUser(req.body);
    // console.log(req.body);
    console.log(message)
    return res.send('post crud from server')
    // return res.render('crud.ejs')
}
let displayGetCRUD=async(req,res)=>{
    let data=await CRUDService.getAllUser();
    // console.log('--------------------')
    // console.log(data)
    // console.log('--------------------')
    // return res.send('display get crud from controller')
    return res.render('displayCRUD.ejs',{
        datatable:data
    })
}
let getEditCRUD=async(req,res)=>{
    //lay id tren url
    let userId=req.query.id;
    // console.log(userId)
    if(userId){
        let userData=await CRUDService.getUserInFoById(userId);
        // console.log('-----------')
        // console.log(userData)
        // console.log('-----------')
        //check userdata not found
        // return res.send(' found a user') 
        return res.render('editCRUD.ejs',{
            //x<=y
            user:userData
        });
    }
    else {     
        return res.send('user not found!')
    }
    // console.log(req.query.id);
}
let putCRUD=async(req,res)=>{
    let data=req.body;
    let allUsers= await CRUDService.updateUserdata(data);
    // return res.send('update done!');
    return res.render('displayCRUD.ejs',{
        datatable:allUsers
    })
}

let deleteCRUD=async(req,res)=>{
    let id =req.query.id;
    if(id ){
        await CRUDService.deleteUserById(id);
        return res.send('delete the user succeed')
    }
    else{
        return res.send('user not found!')
    }
    
}
//dung ngoai
module.exports={
    getHomePage:getHomePage,
    getAboutPage:getAboutPage,
    getCRUD:getCRUD,
    postCRUD:postCRUD,
    displayGetCRUD:displayGetCRUD,
    getEditCRUD:getEditCRUD,
    putCRUD:putCRUD,
    deleteCRUD:deleteCRUD,

}