import express from "express";

import passport from "passport";

import {RestaurantModel} from "../../database/allModels";
import Router from "../Auth";

/*
Route       /
Des        get all the restaurant details based in city 
Params      none
Access      Public
Method      GET
 */
Router.get("/", (req, res) => {
    try {
        const { city }= req.query;
        const allRestaurants = await RestaurantModel.find({city});

        return res.json({ restaurants })
    } catch (error) {
        returnres.status(500).json({error: error.message});
    }

});

/*
Route       /
Des        get individual restaurant details based on id 
Params      id
Access      Public
Method      GET
 */
Router.get("/:id", async(req, res)=>
{
    try{
        const { id } = req.params;
        const restaurant = await RestaurantModel.findOne(_id);
        if(!restaurant) 
        return res.status(404).json({error: "Restaurant Not Found"});
        return res.json({ restaurant });
    }catch{
        return res.status(500).json({error: error.message});
    }
});
/*
Route       /search
Des        get restaurant details based on search string 
Params      none
body        searchString
Access      Public
Method      GET
 */
Router.get("/search", (req, res)=> {
    try {
        const {searchString} = req.body;
        const restaurants = await RestaurantModel/find({
            name:{ $regex:searchString, $options: "i"} });

    if(!restaurants) 
        return res.status(404).json({error: `No Restaurant matched with  ${searchString} Not Found`});
        return res.json({ restaurant });
    }catch{
        return res.status(500).json({error: error.message});
    }
});

export default Router;