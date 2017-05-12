var assert = require('assert');
var Hero = require('../hero.js');
var Task = require('../task.js');
var Food = require('../food.js')

describe("Hero tests", function() {

  var hero;

  beforeEach("setup", function(){
    hero = new Hero("Max", "Edinburgh", "bacon");
    task = new Task("quest to eat every burger in " + hero.city, "medium", true, 20);
    task2 = new Task("go to every park in " + hero.city, "easy", false, 10);
    food = new Food("Poutine", 12);
  });

  it("should have a name", function(){
    assert.equal("Max", hero.name);
  })

  it("hero should be able to talk", function(){
    assert.equal("My name is Max. I am the hero Edinburgh deserves", hero.talk());
  })

  it("should have no tasks at the start", function() {
    assert.equal(0, hero.tasks.length);
  })

  it("should be able to add a task", function(){
    hero.addTask(task);
    hero.addTask(task2);
    console.log(hero.tasks);
    assert.equal(2, hero.tasks.length);
  })

  it("should be able to eat something", function(){
    hero.eatFood(food);
    assert.equal(112, hero.health);
  })

  it("favourite food increase repllenishment value more", function() {
    hero.eatFood(new Food("bacon", 20));
    assert.equal(130, hero.health);
  })
  


})