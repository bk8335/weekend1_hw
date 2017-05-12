function Hero(name, city, favouriteFood, worstFood ) {
  this.name = name;
  this.city = city;
  this.health = 100;
  this.favouriteFood = favouriteFood;
  this.worstFood = worstFood;
  this.tasks = [];
  this.bankBalance = 0;
}  

Hero.prototype = {
  talk: function(){
    return "My name is " + this.name + ". I am the hero " + this.city + " deserves";
  },

  addTask: function(task){
    this.tasks.push(task);
  },

  eatFood: function(food){
    if(this.favouriteFood === food.name){
      this.health += (food.replenishmentValue * 1.5);
    }
    else{
    this.health += food.replenishmentValue;
    }
  },

  orderTaskbyDifficulty: function(){
    return this.tasks.sort(function(a, b){
      if(a.difficulty < b.difficulty){
        return -1;
      }
      if(a.difficulty > b.difficulty){
        return 1;
      }
      return 0;
    });
  },

  orderTaskbyUrgency: function(){
    return this.tasks.sort(function(a, b){
      if(a.isUrgent < b.isUrgent){
        return -1;
      }
      if(a.isUrgent > b.isUrgent){
        return 1;
      }
      return 0;
    });
  },

  orderTaskbyReward: function(){
    return this.tasks.sort(function(a,b){
      return b.reward - a.reward;
    })
  },

  taskComplete: function(task){
    task.isComplete = true;
    this.bankBalance += task.reward;
    task.reward = 0;
  },

  showCompleteTasks: function(task){
    return this.tasks.filter(function(task){
      if(task.isComplete === true){
        return true;
      }
    })
  },

  showIncompleteTasks: function(task){
    return this.tasks.filter(function(task){
      if(task.isComplete === false){
        return true;
      }
    })
  }

}

module.exports = Hero;