/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Without providing context, `this` is automatically set to the window or console.
* 2. Context to `this` is provided (implicitly) by a preceding `.`, followed by a predefined method.
* 3. Context to `this` by means of a constructor function is provided by the `new` keyword.
* 4. Context to `this` is provided (explicitly) by means of a built-in `.call` and/or `.apply` method.
*
* write out a code example of each explanation above
*/

// Principle 1

console.log(this);

// Principle 2

const joe = {
    name: 'Joe',
    say: function() {console.log(`I'm ${this.name}.`)}
}

joe.say();

// Principle 3

function Person(att){
    this.name = att.name;
    this.age = att.age;
}

let jim = new Person({
    name: 'Jim',
    age: 20
});

console.log(jim.name, jim.age);

// Principle 4
function Pet(petAtt){
    Person.call(this, petAtt);
    this.toy = petAtt.toy;
}

Pet.prototype.play = function(){console.log(`${this.name} plays with its\' ${this.toy}`);};

let rocky = new Pet({
    name: 'Rocky',
    age: 70,
    toy: 'bone'
});

rocky.play();