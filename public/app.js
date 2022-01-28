
const server = require('../app/server');
require('../app/database');

server.get('/api', async function(req, res, next) {
    res.json({"msg": 'Close connection...'});

});
