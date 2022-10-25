const { Router } = require('express');
const { viewAllUsers, viewUserById } = require('../controllers/user');

const router = Router();

//Ver todos los usuarios
router.get( '/', viewAllUsers );

//Ver usuario
router.get( '/id', viewUserById );


module.exports = router;