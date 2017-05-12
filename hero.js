function Hero(name, city, favouriteFood ) {
  this.name = name;
  this.city = city;
  this.health = 100;
  this.favouriteFood = favouriteFood;
  this.tasks = [];
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
  }
}

module.exports = Hero;