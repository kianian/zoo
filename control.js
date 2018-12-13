var animalPopulation = 0;
class Animal {

    constructor(name,favoriteFood) {
        this.name = name;
        this.favoriteFood = favoriteFood;
        animalPopulation++;
    }

    sleep() {
        console.log(this.name + " sleeps for ten hours");
    }

    eat(food) {
        console.log(this.name + " eats "+ food);
        food == this.favoriteFood? console.log("YUM!! " + this.name + " wants more " + food) :  this.sleep(this.name);

    }
    static getPopulation() {
        return animalPopulation;
    }
}

class Bear extends Animal {
    constructor(name) {
        super(name, 'fish');
    }
    sleep() {
        console.log(this.name + " hibernates for 4 months");
    }
}

class Tiger extends Animal {

    constructor(name) {
        super(name, 'meat');
    }
}

class Unicorn extends Animal{

    constructor(name){
        super(name, 'marshmallows');
    }
    sleep(){
        console.log(this.name + " sleeps in a cloud");
    }
}

class Giraffe extends Animal{
    constructor(name){
        super(name, "leaves");
    }
    eat(food){
        food == this.favoriteFood? super.eat('leaves') :
            console.log("YUCK!!! " + this.name +  " will not eat" + food);
    }
}

class Bee extends Animal{
    constructor (name){
        super(name, 'pollen');
    }
    sleep(){
        console.log(this.name + " never sleeps");
    }
    eat(food){
        food == this.favoriteFood? super.eat('pollen') :
            console.log("YUCK!!! " + this.name +  " will not eat" + food);
    }
}

class Zookeeper{
    constructor(name, animals){
        this.name = name;
        this.animals = animals;
        this.food = 'butternut squash';

    }
    feedAnimals(){
            console.log(this.name + " is feeding " +  this.food +  " to " + this.animals.length + " animals");
        for(var i= 0; i<this.animals.length; i++){
            this.animals[i].eat(this.food);
            console.log(this.name + " is feeding" + this.food + " to " + i+1  + " of " + animalPopulation  + " total animals");
        }

    }
}


function run() {
    var tigger = new Tiger("Tigger");
    tigger.eat("meat");
    var pooh = new Bear('Pooh');
    pooh.eat("fish");
    pooh.eat("meat");
    var rarity = new Unicorn('Rarity');
    rarity.eat('marshmallows');
    var gemma = new Giraffe('Gemma');
    gemma.eat('meat');
    gemma.eat('leaves');
    var stinger = new Bee('Stinger');
    stinger.eat('ice cream');
    stinger.eat("pollen");
    var zoebot = new Zookeeper('Zoebot', [tigger, pooh, rarity, gemma, stinger]);
    zoebot.feedAnimals();
    Animal.getPopulation();

}

function sleep(name) {
    console.log(name + " sleeps for ten hours");
}

function eat(name, food) {
    console.log(name + " eats "+ food);
    food == favoriteFood ? console.log("YUM!! " + name + " wants more " + food) :  sleep(name);
}