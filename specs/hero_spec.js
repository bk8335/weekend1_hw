var assert = require('assert');
var Hero = require('../hero.js');

describe("Hero tests", function() {

  var hero;

  beforeEach("setup", function(){
    hero = new Hero();
  });

  it("should have a name", function(){
    assert.equal("Max", hero.name);
  })
  


})