const express = require('express');
const router = express.Router();
const User = require('../models/user')


// write csv file 
router.route('/:id')
    .get(async (req, res, next) => {
        const id = req.params.id;
        const { firstName, password } = req.body;
        let currentPassword = password;
        let userPassword ;
        try {
            const user = await User.findOne({ _id: id }).lean().exec();
            userPassword = user.password;
            if(!user){
                res.json({ message:"You have not register user..! ", status : true })
            }else{
                const fields = ['firstName', 'lastName', 'password'];
                const json2csvParser = new Parser({ fields });
                const csv = json2csvParser.parse(data);
                res.json(csv);
            }
           
        } catch (error) {
            next(error);
        }
    })



module.exports = router;