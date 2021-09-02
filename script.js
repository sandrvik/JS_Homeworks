/***** Task 1 *****/

function Animal(name, age, colour) {
    if (!new.target) {
        return new Animal(name, age, colour);
    }

    this.name = name;
    this.age = age;
    this.colour = colour;
}

let cat = new Animal('bars', 4, 'black'); // cat --> { name: 'bars', age: 4, colour: 'black' } 

let dog = Animal('rex', 14, 'gold'); // dog --> { name: 'rex', age: 14, colour: 'gold' } 

/***** Task 2 *****/



/***** Task 3 *****/



/***** Task 4 *****/



/***** Task 5 *****/