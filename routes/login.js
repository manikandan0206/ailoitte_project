const express = require('express');
const router = express.Router();
const User = require('../models/user')
const key = "ailoitte_private_key";
const jsonwebtoken = require('jsonwebtoken');

// get All userList
router.route('/:id')
    .get(async (req, res, next) => {
        const id = req.params.id;
        const { firstName, password } = req.body;
        let currentPassword = password;
        let userPassword;
        try {
            const user = await User.findOne({ _id: id }).lean().exec();
            userPassword = user.password;

            if (!user) {
                res.json({ message: "You have not register user..! ", status: false })
            }
            let tokenData = {
                firstName,
                password
            };
            const usertoken = await jsonwebtoken.sign({
                tokenData
            }, key);
            let token = await jsonwebtoken.verify(
                usertoken,
                key);
            if(!token){
                res.json({ message: "Invalid Token ", status: false })
            }
            if (currentPassword === userPassword) {
                res.json({result:user, serect : token, message: "You have login", status: true })

            }
            res.json(
                token
            )

        } catch (error) {
            next(error);
        }
    })



module.exports = router;