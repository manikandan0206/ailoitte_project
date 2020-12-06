const get = require('./get');
const createNewUser = require('./create');
const login = require('./login');
const remove = require('./delete');
const update = require('./update');


module.exports = app => {
    app.use('/api/view', get);
    app.use('/api/create', createNewUser);
    app.use('/api/login', login);
    app.use('/api', remove);
    app.use('/api', update);

};