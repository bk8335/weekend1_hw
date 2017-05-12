function Villain(name){
  this.name = name;
  this.health = 100;
  this.food = [];
}

Villain.prototype = {

  addFood: function(food){
    this.food.push(food);
  },

  throwFood: function(food, person){
    var index = this.food.indexOf(food);
    this.food.splice(index, 1);
    if(person.worstFood === food.name){
      person.health = 0;
      console.log(person.name + " just lost his superpowers by eating his worst food - " + person.worstFood + " (yuk!)")
    }
    else{
    person.health -= food.replenishmentValue;
    }
  }


}

module.exports = Villain;