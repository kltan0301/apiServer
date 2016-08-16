module.exports = function(app) {

  var myController = require('../controllers/me.server.controller');

  app.get('/me', myController.index);
};
