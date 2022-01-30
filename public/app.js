
const db = require('../app/models');
const server = require('../app/server');

server.get('/api', async function(req, res, next) {
    res.json({"msg": 'Close connection...'});

});
