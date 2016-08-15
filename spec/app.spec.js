var app = require('../app');
var request = require("request");
var supertest = require("supertest");
var base_url = "http://localhost:3000";

describe("Express Server API", function(){
  describe("should return json on get /me", function(){
    it("returns status code 200 when valid url", function(done){
      supertest(app)
        .get('/me')
        .expect('Content-Type',/json/)
        .expect(200, done);
    });
    it("returns status code 404 when invalid url", function(done){
      supertest(app)
        .get('/me1')
        .expect(404, done);
    });
    it("returns correct json format", function(done){
      supertest(app)
        .get('/me')
        .expect([{
            name: 'hades'
        }]);
    });
  });
});
