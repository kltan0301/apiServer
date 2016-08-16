var express = require('express'),
    morgan = require('morgan'),
    compress = require('compression'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');

module.exports = function(){
  var app = express();

if(process.env.NODE_ENV === 'development'){
  app.use(morgan('dev'));
}else if(process.env.NODE_ENV === 'production'){
  app.use(compress());
}

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());
app.use(methodOverride());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

require('../app/routes/me.server.routes')(app);

return app;
};
