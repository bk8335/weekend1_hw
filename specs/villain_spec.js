var assert = require('assert');
var Villain = require('../villain.js');
var Food = require('../food.js');
var Hero = require('../hero.js');

describe("Villain tests", function(){

  var villain;

  beforeEach("setup", function(){
    villain = new Villain("nemesis");
    var food = new Food("garlic bread", 40);
    var food2 = new Food("sweetcorn", 30);
    villain.addFood(food);
    villain.addFood(food2);
  })

  it("should add food", function(){
    food3 = new Food("bacon sandwich", 80);
    villain.addFood(food3)
    assert.equal(3, villain.food.length);
  })

  
})