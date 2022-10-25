const { response } = require("express");
const User = require("../models/User");


const viewAllUsers = async (req, res = response) => {

    try {
        const all = await User.find({});
        res.send(all);
    } catch (error) {
        return res.status(500).json({ 
            ok: false, 
            msg: "No users found" 
        });
    }
    
};


const viewUserById = async (req, res = response) => {

    try {
        const all = await User.findById({ _id });
        res.send(all);
    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: "No users found"
        });
    }

};



module.exports = { viewAllUsers, viewUserById };