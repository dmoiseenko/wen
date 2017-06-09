const setupRoutes = require('../utils/setupRoutes.js');
const login = require('../routes/api/login/api.login.route');
const logout = require('../routes/api/logout/api.logout.route');


module.exports = () => setupRoutes([
  login,
  logout
]);
