const express = require('express');
const router = express.Router();
const User = require('../models/user')
const jsonwebtoken = require('jsonwebtoken');
const key = "ailoitte_private_key";

router.route('/')
    .post(async (req, res, next) => {

        try {
            const { firstName, lastName, password} = req.body;
            let user = {};
            user.firstName = firstName;
            user.lastName = lastName;
            user.password = password;
            let userModel = new User(user);
            await userModel.save();
            const tokenData = {
                firstName, 
                 password
            };
            const token = await jsonwebtoken.sign({
                tokenData
            }, key);

            res.json({result:userModel , secret: token}); 
        } catch (error) {
            next(error);
        }
    })


module.exports = router;