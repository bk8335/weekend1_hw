var assert = require('assert');
var Task = require('../task.js');

describe("Task tests", function(){

  var task;

  beforeEach("setup", function(){
    task = new Task("quest to eat every burger in Edinburgh", "medium", true, 20, false);
  })

  it("task should not be complete", function(){
    assert.equal(false, task.isComplete);
  })

})
