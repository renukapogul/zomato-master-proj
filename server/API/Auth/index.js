//Library
import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
//Models
import {UserModel} from "../../database/user";
import passport from "passport";

const Router = express.Router();
/*
Route       /signup
Des         signup with email and password
Params      none
Access      Public
Method      Post
 */
 
Router.post("/signup", async(req, res) =>{
    try{

        //check whether email exist 
        await UserModel.findByEmailAndPhone(req.body.credentials);
        const newUser=  await UserModel.create(req.body.credentials);       
        //generate JWT auth token
        const token =  newUser.generateJwtToken();
        return res.status(200).json({token, status:"success"});


    }catch(error){
        return res.status(500).json({error: error.message});
    }
});


/*
Route       /signin
Des         register with email and password 
Params      none
Access      Public
Method      Post
 */
Router.post("/signin", async(req, res) =>{
    try{
            const user = await UserModel.findByEmailAndPassword(req.body.credentials);
            
            const token =  user.generateJwtToken();
            return res.status(200).json({token, status:"success"});


    }catch(error){
        return res.status(500).json({error: error.message});
    }
});

/*
Route       /google
Des         google sign in 
Params      none
Access      Public
Method      get
 */
Router.get("/google", passport.authenticate("google", 
{scope:  ["https://www.googleapis.com/auth/userinfo.profile", 
        "https://www.googleapis.com/auth/userinfo.email"],
})
 );


/*
Route       /google/callback
Des         google signin callback
Params      none
Access      Public
Method      GET
 */
Router.get("/google/callback", passport.authenticate("google", {failureRedirect: "/"}), 
(req, res) => {
    try{
        return res.json({token: req.session.passport.user.token});

    }catch{
        console.log(error);
    }
});

export default Router;