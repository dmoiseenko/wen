const supertest = require('supertest');

const config = require('../../../../common/config.js');


module.exports = () => supertest(`http://${config.server.host}:${config.server.port}`);

