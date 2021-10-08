const express = require("express");
const { body } = require("express-validator");

const User = require("../models/user");
const authController = require("../controllers/auth");
const isAuth = require("../middlewares/is-auth");

const router = express.Router();

router.post(
  "/signup",
  authController.signup
);

router.post("/login", authController.login);
router.get("/home", isAuth, authController.getHome);
module.exports = router;
