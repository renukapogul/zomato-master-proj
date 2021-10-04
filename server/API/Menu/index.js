import express from "express";

import passport from "passport";

import {MenuModel, ImageModel} from "../../database/allModels";
import Router from "../Auth";

/*
Route       /
Des         get all menu based on id
Params      none
Access      Public
Method      GET
 */
Router.get("/list/:_id", async(req, res) => {
    try {
        const { _id } = req.params;
        const menus = await MenuModel.findOne(_id);

        return res.json({ menus });
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
});

/*
Route       /image
Des         get all menu based on id
Params      _id
Access      Public
Method      GET
 */

Router.get("/image/:_id", async(req, res) => {
    try {
        const { _id } = req.params;
        const menus = await ImageModel.findOne(_id);

        return res.json({ menus });
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
} )



