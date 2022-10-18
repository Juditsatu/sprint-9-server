const { Router } = require('express');
const { check } = require('express-validator');
const { newUser, loginUser, renewToken } = require('../controllers/auth');
const { validateFields } = require('../middlewares/validate-fields');
const { validateJWT } = require('../middlewares/validate-jwt');

const router = Router();

//Crear un nuevo usuario
router.post( '/new', [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Email is required').isEmail(),
    check('password', 'Password is required').isLength({ min: 6 }),
    validateFields
], newUser );

//Login usuario
router.post( '/', [
    check('email', 'Email is required').isEmail(),
    check('password', 'Password is required').isLength({ min: 6 }),
    validateFields
], loginUser );

//Validar y revalidar token
router.get( '/renew', validateJWT, renewToken );






module.exports = router;