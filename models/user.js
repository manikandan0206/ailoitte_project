const mongoose = require('mongoose');
const getRequiredFiledMessage = (filed) => {
    const message = `${filed} Should Not Be Empty`;
    return [true, message];
};

const user = new mongoose.Schema({
    firstName:{
        type: String,
        required: getRequiredFiledMessage('First name') 
    },
    lastName:{
        type: String,
        required: getRequiredFiledMessage('Last name') 
    },
    password:{
        type: String,
        required: getRequiredFiledMessage('Password name')
    }
});

module.exports = User = mongoose.model('user', user);