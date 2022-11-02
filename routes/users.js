const { Router } = require('express');
const { viewAllUsers, editUser } = require('../controllers/user');

const router = Router();

//Ver todos los usuarios
router.get( '/', viewAllUsers );

//Ver todos los usuarios
router.get( '/edit', validateJWT, editUser );


module.exports = router;