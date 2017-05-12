var assert = require('assert');
var Hero = require('../hero.js');
var Task = require('../task.js');
var Food = require('../food.js');
var Rat = require('../rat.js');
var Villain = require('../villain.js');

describe("Hero tests", function() {

  var hero;
  var task;
  var task2;
  var task3;
  var food;
  var rat;
  var villain;

  beforeEach("setup", function(){
    hero = new Hero("Max", "Edinburgh", "bacon", "brussel sprouts");
    task = new Task("quest to eat every burger in " + hero.city, "medium", true, 20);
    task2 = new Task("go to every park in " + hero.city, "easy", false, 10);
    task3 = new Task("save Oinks from being robbed", "hard", true, 50);
    food = new Food("Poutine", 12);
    food2 = new Food("brussel sprouts", 35);
    rat = new Rat();
    villain = new Villain("bedtime");
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

  it("should be able to sort tasks by difficulty", function(){
    hero.addTask(task);
    hero.addTask(task2);
    hero.addTask(task3);
    var result = hero.orderTaskbyDifficulty();
    assert.equal("easy", result[0].difficulty)
  })

  it("should be able to sort by urgency", function(){
    hero.addTask(task);
    hero.addTask(task2);
    hero.addTask(task3);
    var result = hero.orderTaskbyUrgency();
    assert.equal(false, result[0].isUrgent)
  })

  it("should be able to sort by reward", function(){
    hero.addTask(task);
    hero.addTask(task2);
    hero.addTask(task3);
    var result = hero.orderTaskbyReward();
    assert.equal(50, result[0].reward)
  })

  it("should be able to mark a task complete", function(){
    hero.addTask(task);
    hero.taskComplete(task);
    assert.equal(true, task.isComplete);
  })

  it("should be able to filter by complete/incomplete tasks", function(){
    hero.addTask(task);
    hero.addTask(task2);
    hero.addTask(task3);
    hero.taskComplete(task);
    var result1 = hero.showCompleteTasks();
    assert.equal(1, result1.length);
    var result2 = hero.showIncompleteTasks();
    assert.equal(2, result2.length);
  })

  it("rat should damage health of hero", function(){
    assert.equal(100, hero.health);
    hero.eatFood(food);
    assert.equal(112, hero.health);
    var food2 = new Food("fish and chips", 50);
    rat.touch(food2);
    hero.eatFood(food2);
    assert.equal(62, hero.health);
  })

  it("hero bank balance goes up after completing a task", function(){
    hero.addTask(task);
    assert.equal(20, task.reward);
    hero.taskComplete(task);
    assert.equal(20, hero.bankBalance);
    assert.equal(0, task.reward);
  })

  it("hero should die after eating worst food", function(){
    hero.eatFood(food2);
    assert.equal(0, hero.health);
  })

  it("villain can throw food", function(){
    villain.throwFood(food, hero);
    assert.equal(88, hero.health);
    assert.equal(0, villain.food.length);
  })

  it("villain can kill hero", function(){
    villain.throwFood(food2, hero);
    assert.equal(0, hero.health);
  })

  it("hero should attack villain", function(){
    hero.attack(villain);
    assert.equal(50, villain.health);
  })
  


})