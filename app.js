var express = require('./config/express');
var app = express();

app.set('port', (process.env.PORT || 7000));

app.listen(app.get('port'), function(){
  console.log('Express server running at localhost', app.get('port'));
});

module.exports = app;
