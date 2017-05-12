var assert = require('assert');
var Food = require('../food.js');

describe("Food tests", function(){

  var food;

  beforeEach("setup", function(){
    food = new Food("burger", 8);
  });

  it("should have a replenishment value", function(){
    assert.equal(8, food.replenishmentValue);
  })


})