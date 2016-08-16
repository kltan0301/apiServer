var app = require('../app');
var request = require("request");
var supertest = require("supertest");
var base_url = "http://localhost:3000/";

describe("Express Server API", function(){
  describe("should return user json details on get /me", function(){
    it("returns status code 200", function(done){
      supertest(app)
        .get('/me')
        .expect('Content-Type',/json/)
        .expect(200, done);
    });
    it("returns status code 404", function(done){
      supertest(app)
        .get('/me1')
        .expect('Content-Type',/html/)
        .expect(404, done);
    });
    it("returns a correct json format", function(done){
      supertest(app)
        .get('/me')
        .expect({
          profilePic:'http://www.playgamesarcade.com/images/avatars/calvin_avatar.jpg',
          name: 'Kai Lin',
          title: 'Game Designer',
          location: 'Singapore'
        }, done);
    });
  });
});
