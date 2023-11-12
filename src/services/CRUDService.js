// const bcrypt = require("")
import db, { sequelize } from '../models/index';  

import bcrypt from 'bcryptjs/dist/bcrypt';
const salt = bcrypt.genSaltSync(10);
let createNewUser= async(data)=>{
    return new Promise(async(resolve,reject)=>{
        try{
            let hasPasswordFromBcrypt=await hashUserPassword(data.password);
            await db.User.create({
                email: data.email,
                password:hasPasswordFromBcrypt,
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                phonenumber: data.phonenumber,
                gender: data.gender==='1'? true:false, 
                roleId: data.roleId,       
            })
            resolve('ok create a mew user')
        }catch(e){
            reject(e)
        }
    })
    
    // console.log('data from service')
    // console.log(data)
    // console.log(hasPasswordFromBcrypt)
}

let hashUserPassword=(password)=>{
    return new Promise(async (resolve,reject)=>{
        try{
            let hashPassword=await bcrypt.hashSync(password, salt);
            resolve(hashPassword);
        }catch(e){
            reject(e);
        } 
})
}

let getAllUser=()=>{
    return new Promise(async (resolve,reject)=>{
        try{
            let users=db.User.findAll({
                raw:true,
            });
            resolve(users)
        }catch(e){
            reject(e)
        }
    })
}

let getUserInFoById =(userId)=>{
    return new Promise(async(resolve,reject)=>{
        try{
            let user=await db.User.findOne({
                where:{id:userId },
                raw:true,
            })
            if(user){
                resolve(user)
            }
            else{
                resolve({})
            }
        }
        catch(e){
            reject(e);
        }
    })
}
let updateUserdata=(data)=>{
    return new Promise(async(resolve,reject)=>{
        try{
            let user=await db.User.findOne({
                where:{id:data.id}
            })
            if(user){
                user.firstName=data.firstName;
                user.lastName=data.lastName;
                user.address=data.address;

                await user.save();
                //lấy dc hết người dùng
                let allUsers=await db.User.findAll();
                //thoát khỏi promise
                resolve(allUsers);

            }
            else{
                resolve();
            }
            // await db.User.update({})
        }catch(e){
            console.log(e);
        }
    })
}
let deleteUserById=(userId)=>{
    return new Promise(async(resolve,reject)=>{
        try{
            let user =await db.User.findOne({
                where:{id:userId}
            })
            if(user){
                await user.destroy();
            }
            resolve();
        }catch(e){
            reject(e);
        }
    })
}

module.exports={
    createNewUser:createNewUser,
    hashUserPassword:hashUserPassword,
    getAllUser:getAllUser,
    getUserInFoById:getUserInFoById,
    updateUserdata:updateUserdata,
    deleteUserById:deleteUserById,
    // v16.14.0
    
}