const express=require('express');
const router=express.Router();
const userController=require('./../controllers/userController');



router.get('/api/v1/users',userController.getAllUsers);

router.get('/api/v1/users/:id',userController.getUserById);

router.patch('/api/v1/users/:id',userController.updateUser);

router.delete('/api/v1/users/:id',userController.deleteUser);

router.post('/api/v1/users',userController.createUser);

module.exports  =router;