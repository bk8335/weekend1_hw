function Rat(){
};

Rat.prototype = {
  touch:function(food){
    return food.replenishmentValue = food.replenishmentValue * -1;
  }
}

module.exports = Rat;