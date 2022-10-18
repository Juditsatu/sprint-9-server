const { response } = require('express');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const { generateJWT } = require('../helpers/jwt');

const newUser = async(req, res = response) => {

    const { email, name, password } = req.body;

    try {
        // Verificar email
        const user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({
                ok: false,
                msg: 'User with that email already exists'
            });
        }

        // Crear usuario con el modelo
        const dbUser = new User( req.body );


        // Hash de password
        const salt = bcrypt.genSaltSync();
        dbUser.password = bcrypt.hashSync( password, salt );

        // Generar el JWT
        const token = await generateJWT( dbUser.id, name );

        // Crear usuario BD
        await dbUser.save();

        // Generar respuesta con exito
        return res.status(201).json({
            ok: true,
            uid: dbUser.id,
            name,
            email,
            token
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Contact the administrator'
        });
    }

}



const loginUser = async(req, res = response) => {

    const { email, password } = req.body;

    try {

        const dbUser = await User.findOne({ email });

        if (!dbUser) {
            return res.status(400).json({
                ok: false,
                msg: 'Email does not exist'
            });
        }

        const validPassword = bcrypt.compareSync( password, dbUser.password );

        if (!validPassword) {
            return res.status(400).json({
                ok: false,
                msg: 'Invalid password'
            });
        }

        // Generar el JWT
        const token = await generateJWT( dbUser.id, dbUser.name );

        // Respuesta del servicio
        return res.json({
            ok: true,
            uid: dbUser.id,
            name: dbUser.name,
            email: dbUser.email,
            token
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Contact the administrator'
        });
    }

}

const renewToken = async(req, res = response) => {

    const { uid } = req;

    // Leer la base de datos
    const dbUser = await User.findById(uid);

    // Generar el JWT
    const token = await generateJWT( uid, dbUser.name );

    return res.json({
        ok: true,
        uid,
        name: dbUser.name,
        email: dbUser.email,
        token
    })

}

module.exports = {
    newUser,
    loginUser,
    renewToken
}