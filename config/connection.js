const { connect, connection } = require('mongoose');

connect('mongodb://localhost/social-network-api', {
    useFindAndModify: false,
    useUnifiedTopology: true
    });

    module.exports = connection;