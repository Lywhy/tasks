'use strict';

function Character (race, name, lang) {
    this.race = race;
    this.name = name;
    this.lang = lang;
}

Character.prototype.speak = function() {
    return `Язык: ${this.lang}, Имя: ${this.name}`;
}

const orc = new Character('Orc', 'Vild', 'Twild');
orc.weapon = 'Sword';

Character.prototype.hit = function() {
    return 'Удар';
}

const elf = new Character('Elf', 'Sabrina', 'Flews');
elf.magic = 'Wind';

Character.prototype.createMagic = function() {
    return 'Получено новое заклинание';
}

console.log(orc.speak());
console.log(orc.hit());
console.log(elf.speak());
console.log(elf.createMagic());