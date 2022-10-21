/*
 определяет общий интерфейс для
 создания объектов в суперклассе, позволяя подклассам
 именять тип создаваемых объектов
*/

// Simple factory
class Monster {
  constructor(type, level) {
    this._type = type;
    this._level = level;
  }

  get type() {
    return this._type;
  }

  get level() {
    return this._level;
  }
}

const MonterFactory = {
  makeMonster: function (type, level) {
    return new Monster(type, level);
  },
};

const kolobok = MonterFactory.makeMonster("Kolobok", 22);

// console.info(kolobok.level);

//  Factory method
class Dragon {
  constructor() {
    this.health = 50;
  }

  attack() {
    this.health -= 10;
  }
}

class Snake {
  constructor() {
    this.health = 40;
  }

  attack() {
    this.health -= 20;
  }
}

class Player {
  fightMonster() {
    const monster = this.makeMonster();
    monster.attack();
    return monster;
  }
}

class Warrior extends Player {
  makeMonster() {
    return new Dragon();
  }
}

class Knight extends Player {
  makeMonster() {
    return new Snake();
  }
}

const player1 = new Warrior();
console.log(player1.fightMonster());

const player2 = new Knight();
player2.fightMonster();
