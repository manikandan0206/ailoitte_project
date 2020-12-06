const express = require('express');
const router = express.Router();
const User = require('../models/user');
const { route } = require('./create');

// get All userList
router.route('/')
    .get(async (req, res, next) => {

        try {
            const result = await User.find({}).lean().exec();
            res.json(result);
        } catch (error) {
            next(error);
        }
    })

//get user by Id
router.route('/:id')
    .get(async (req, res) => {
        const id = await req.params.id;
        const getDetails = await User.find({ _id: id });
        res.json(getDetails);
    })

// page by page user
router.route('/page')
    .post(async (req, res) => {
        var pageNo = req.body.page;
        try {
            if (pageNo === 0 || pageNo === null) {
                pageNo = 1;
              }
            const result = await User.find().skip((pageNo - 1) * 3).limit(1).lean().exec();
            res.json(result);
        } catch (error) {
            next(error);
        }
    })

module.exports = router;