const myObject = {
    property: 'value',
    'obnoxious property': function(){
        console.log('Object and Object Constructors')
    }
};

myObject['obnoxious property'];

//constructor
function Player(name, marker) {
    this.name = name;
    this.marker = marker;
    //
    this.subFunction = () =>{
        console.log('This is a function inside a constructor');
        return `The owner of this function is  Dr. ${this.name}.`;
    }
}

//new object
const player1 = new Player('Yves', 'L');
console.log(player1.name);
//2nd objec
const player2 = new Player('St.Laurent', 'ysl')

//exercise 1, constructor for making book objects


//checking if the prototype of an instance is the same as it's parent
// console.log(Object.getPrototypeOf(player1) === Player.prototype)
// console.log(Object.getPrototypeOf(player2) === Player.prototype)
// console.log(Object.getPrototypeOf(player1))
// console.log(Player.prototype)
// console.log(player1.prototype)

//

function Person(name){
    this.name;
};
//defined a prototype for Person consturctor and it's instances
Person.prototype.sayName = function(){
    console.log(`Hey, my name is ${this.name}`);
}

function Outfit(name, price, inspo){
    this.name = name;
    this.price = price;
    this.inspo = inspo;
}

Outfit.prototype.getInspo = function(){
    console.log(`Your outfit, ${this.name}, £${this.price}... that's insane`)
    console.log(`It's ${this.inspo} coded, so it's alright I guess`)
};


//make outfit object inherit from person object
Object.setPrototypeOf(Outfit.prototype, Person.prototype);
Object.getPrototypeOf(Outfit.prototype)

const outfit1 = new Outfit('Lelouch', '2000', 'Maison Margiela');
outfit1.sayName()
outfit1.getInspo()