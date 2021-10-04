//importing Env variables
require("dotenv").config();


//libraries
import express from "express";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";
//database Connection 
import ConnectDB from "./database/connection";

//import configs
import googleAuthConfig from "./config/google.config"

//microservices routes
//API
import Auth from "./API/Auth";
import Restaurant from "./API/Auth";
import Food from "./API/Auth";


const zomato= express();
 //application middlewares
zomato.use(express.json());
zomato.use(express.urlencoded({extended: false}));
zomato.use(helmet());
zomato.use(cors());
zomato.use(passport.initialize());


//passport configurations
googleAuthConfig(passport);

//Aplication routes
zomato.use("/auth", Auth);
zomato.use("/restaurant", Restaurant);
zomato.use("/food", Food);

zomato.get("/" , (req, res ) => res.json({message: "setup success"}));

zomato.listen(3000, () => 
    ConnectDB()
    .then(() => console.log("server is running "))
    .catch(() =>  
        console.log("server is running but database connection is failed"))
);  