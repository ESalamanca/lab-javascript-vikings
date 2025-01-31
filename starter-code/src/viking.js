// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    super.receiveDamage(damage);
    if (this.health <= 0) {
      return `${this.name} has died in act of combat`;
    }
    return `${this.name} has received ${damage} points of damage`;
  }

  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }

  receiveDamage(damage) {
    super.receiveDamage(damage);
    if (this.health <= 0) {
      return `A Saxon has died in combat`;
    }
    return `A Saxon has received ${damage} points of damage`;
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  vikingAttack(){
    //picks a Viking and a Saxon at random : 
    var indexSaxon=Math.floor(Math.random()*this.saxonArmy.length);
    var indexViking=Math.floor(Math.random()*this.vikingArmy.length);
    var saxon=this.saxonArmy[indexSaxon];
    var viking=this.vikingArmy[indexViking];
    var damage=saxon.receiveDamage(viking.attack());
    if(saxon.health<=0){this.saxonArmy.splice(indexSaxon,1)};
    return damage;
  }

  saxonAttack(){
    //picks a Viking and a Saxon at random 
    var indexSaxon=Math.floor(Math.random()*this.saxonArmy.length);
    var indexViking=Math.floor(Math.random()*this.vikingArmy.length);
    var saxon=this.saxonArmy[indexSaxon];
    var viking=this.vikingArmy[indexViking];
    var damage=viking.receiveDamage(saxon.attack());
    if(viking.health<=0){this.vikingArmy.splice(indexViking,1)};
    return damage;

  }

  showStatus(){
    if(this.saxonArmy.length==0){return "Vikings have won the war of the century!"}
    else if(this.vikingArmy.length==0){return "Saxons have fought for their lives and survive another day..."}
    else {return "Vikings and Saxons are still in the thick of battle."};

  }
}
