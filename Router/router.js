//1) import express
const express = require('express');

//2) router library is inside express, so import that
const router = new express.Router()

const userController = require('../Controllers/userController')
const projectController = require('../Controllers/projectController')

const jwtMiddleware = require('../Middlewares/jwtMiddleware')
const multerConfig = require('../Middlewares/multerMiddleware')

// 3)different path for resolving request
router.post('/user/register', userController.register)
router.post('/user/login', userController.login)
router.post('/project/addproject', jwtMiddleware, multerConfig.single('projectImage'), projectController.addProject)

router.get('/project/homeproject', projectController.getHomeProject);
router.get('/project/allproject', jwtMiddleware, projectController.getAllProject);
router.get('/project/userproject', jwtMiddleware, projectController.getUserProject);

router.put('/project/editproject/:id', jwtMiddleware, multerConfig.single('projectImage'), projectController.editUserProject)

router.delete('/project/delete/:id', jwtMiddleware, projectController.deleteUserProject)

//4) export router
module.exports = router;