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
        const all = await User.find({});
        res.send(all);
    } catch (error) {
        return res.status(500).json({ 
            ok: false, 
            msg: "No users found" 
        });
    }

};

const editUser = async (req, res = response, next) => {

    User.findById(req.user.id, function (err, user) {
        if (!user) {
            return res
                .status(httpStatus.INTERNAL_SERVER_ERROR)
                .json({ message: 'User is not found' });
        }
        const schema = Joi.object().keys({
            name: Joi.string()
                .min(4)
                .max(10)
                .required(),
            email: Joi.string()
                .email()
                .required(),
            address: Joi.string().required(),
            postalCode: Joi.string().required(),
            city: Joi.string().required(),
        });
        const { error, value } = Joi.validate(req.body, schema);
        if (error && error.details) {
            return res.status(HttpStatus.BAD_REQUEST).json({ msg: error.details })
        }
        const email = Helpers.lowerCase(req.body.email);
        const name = Helpers.lowerCase(req.body.name);
        const address = req.body.address;
        const postalCode = req.body.postalCode;
        const city = req.body.city;
        user.set({
            email: email,
            name: name,
            address: address,
            postalCode: postalCode,
            city: city
        });
        user.save(function (error, updatedUser) {
            if (error) {
                /* Handle it */
            }
        })
    });
    
};



module.exports = { viewAllUsers, viewUserById, editUser };