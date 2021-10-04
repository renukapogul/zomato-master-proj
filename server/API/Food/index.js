import express from "express";

import passport from "passport";

import {FoodModel} from "../../database/allModels";
import Router from "../Auth";

const Router = express.Router();
/*
Route       /
Des        get all the foods based on Particular Restaurant 
Params      id
Access      Public
Method      GET
 */

Router.get("/:id", async(res, req) => {
    try {
        const {_id} = req.params;
        const  foods = await FoodModel.find({restaurant: _id});
        return res.json({foods});

    } catch (error) {
        return res.statusCode(500).json({error: error.message });
    }
})

/*
Route       /c
Des         get all the foods based on particular Restaurant 
Params      categoery
Access      Public
Method      GET
 */

Router.get("/r/:category", async(res, req) => {
    try {
        const { category } = req.params;
        const  foods = await FoodModel.find({category: {regex: category, $options: "i"},});
        return res.json({foods});

    } catch (error) {
        return res.statusCode(500).json({error: error.message });
    }
})