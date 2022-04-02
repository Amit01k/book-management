const express = require('express');
const router = express.Router();

const aws = require('aws-sdk')

const UserController = require("../controllers/userController")

const mid = require("../middlware/middlware")

const reviewController = require("../controllers/reviewController")

const bookController = require("../controllers/bookController");
const { route } = require('express/lib/application');


//some improtant data 
router.post('/register', UserController.CreateUser)

router.post("/login", UserController.logIn)

router.post("/books", mid.authentication, bookController.createBook)

router.get("/books", mid.authentication, bookController.getBook)

router.post("/books/:bookId/review", reviewController.createPost)

router.get("/books/:bookId", mid.authentication, bookController.getById)

router.put("/books/:bookId", mid.authentication, mid.authorization, bookController.update)

router.delete("/books/:bookId", mid.authentication, mid.authorization, bookController.deleteById)

router.put("/books/:bookId/review/:reviewId", reviewController.updataReview)

router.delete("/books/:bookId/review/:reviewId", reviewController.deletedReviewById)




module.exports = router