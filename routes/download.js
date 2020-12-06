const express = require('express');
const router = express.Router();
const User = require('../models/user')
const fs = require('fs');
// write csv file 
router.route('/:id')
    .get(async (req, res, next) => {
        const id = req.params.id;
        try {
            const user = await User.findOne({ _id: id }).lean().exec();
            if(!user){
                res.json({ message:"You have not register user..! ", status : true })
            }else{
                let filePath = 'D:\ailoitte_second\server-side\routes\downloaded';
                var jsonContent = JSON.stringify(user);
                fs.writeFile(filePath, jsonContent, 'utf8', function (err) {
                    if (err) {
                        console.log("An error occured while writing JSON Object to File.");
                        return console.log(err);
                    }
                    console.log(filePath + "JSON file has been saved.");
                });
            }
           
        } catch (error) {
            next(error);
        }
    })



module.exports = router;