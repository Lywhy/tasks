class Entity {
    constructor(race, name, lang){
        this.race = race;
        this.name = name;
        this.lang = lang;
    }

    speak(){
        return 'я умею говорить!'
    }
}

class Orc extends Entity {
    constructor(race, name, lang, weapon) {
        super(race,name,lang);
        this.weapon = weapon;
    }

    hit(enemy){
        return `${this.race} ударил ${enemy.race}а с помощью ${this.weapon}`;
    }

    speak(){
        return 'За орду!';
    }
}

class Elf extends Entity {
    constructor(race, name, lang, spell) {
        super(race,name,lang);
        this.spell = [spell];
    }

    createSpell(nameSpell){
        if (!this.spell.includes(nameSpell)) {
            this.spell.push(nameSpell);
        }

        return `${this.race} создал новое заклинание - ${nameSpell}, теперь он может использовать: ${this.spell.join(',')}`
    }

    speak(){
        return 'Беречь природу';
    }
}

const orc = new Orc('Орк', 'Вит','орочий', 'дубинка');
const elf = new Elf('Эльф', 'Тив','эльфийский', 'воздушная сфера');
console.log(orc.hit(elf));
console.log(orc.speak());
console.log(elf.createSpell('огненный шар'));
console.log(elf.speak());