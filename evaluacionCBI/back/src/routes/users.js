const express = require('express');
const router = express.Router();

//importamos el controlador
const usersController = require('../controllers/usersController');

router.get('/',usersController.list);
router.get('/info', usersController.info);
router.get('/:id',usersController.listUser);
router.post('/',usersController.save);
router.put('/:id',usersController.edit);
router.delete('/:id',usersController.delete);

module.exports = router; // se exporta
