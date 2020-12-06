const express = require('express');
const router = express.Router();
const User = require('../models/user')

router.route('/:id')
    .delete(async (req, res, next) => {
        const id = await req.params.id;
        try {
            const result = await User.findOneAndRemove({ _id: id }).exec();
            res.json({ message: "Successfully delete", status: true });
        } catch (error) {
            next(error)
        }
    })

module.exports = router;