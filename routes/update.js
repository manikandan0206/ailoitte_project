const express = require('express');
const router = express.Router();
const User = require('../models/user')

// update the user by Id
router.route('/:id')
    .put( async (req, res, next) => {
        const id = await req.params.id;
        const { body } = req;
        try {
            const result = await User.findOneAndUpdate({ _id: id }, body, { new: true }).exec();
            res.json(result);
        } catch (error) {
            next(error);
        }

    })

module.exports = router;