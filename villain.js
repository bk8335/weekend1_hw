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
  },

  throwRandomFood: function(hero){
    // let counter = this.food.length;
    // while (counter > 0){
    //   let index = Math.floor(Math.random() * counter);
    //   counter --;
    //   let temp = this.food[counter];
    //   this.food[counter] = this.food[index];
    //   this.food[index] = temp;
    // }
    // return this.food;
    // var j, x, i;
    // for (i = this.food.length; i; i--) {
    //     j = Math.floor(Math.random() * i);
    //     x = this.food[i - 1];
    //     this.food[i - 1] = this.food[j];
    //     this.food[j] = x;
    // }
    hero.eatFood(this.food[0])
    this.food.shift();
  }

}

module.exports = Villain;