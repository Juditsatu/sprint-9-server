const { Router } = require('express');
const { viewAllUsers } = require('../controllers/user');

const router = Router();

//Ver todos los usuarios
router.get( '/', viewAllUsers );


module.exports = router;