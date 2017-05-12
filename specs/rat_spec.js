var assert = require('assert');
var Rat = require('../rat.js');
var Food = require('../food.js');

describe("rat tests", function(){

  var rat;

  beforeEach("setup", function(){
    rat = new Rat()
    food1 = new Food("pizza", 5);
  })

  it("should turn food repllenishment negative", function(){
    rat.touch(food1);
    assert.equal(-5, food1.replenishmentValue)
  })




})