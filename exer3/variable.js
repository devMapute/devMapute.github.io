// console.log("Hello World");

// const a = 10; // unchangable: mandatory, needs to init with a value
// let b = 250;  // closest fx
// var c = 3000; // for whole fx

// // console.log(typeof(a));
// console.log(typeof("some string"));
// console.log(typeof(24));


// Boolean("some string");
// console.log(Boolean("some string"));
// console.log(Boolean(""));


// console.log(5**2);

// console.log("name = 'bogart'")


// console.log("Welcome to \"CMSC100\" ");


// var x;
// console.log(x) // undefined

const person = {
  name: 'Tim Berners-Lee',
  age: 66,
  gender: 'male',
  interests: ['physics', 'web'],
  greeting: function() {
    console.log("Hi, my name is " + this.name + " and my interests are " 
    + this.interests[0] + " and " + this.interests[1] + ".")
  }
}


// function add(x, y) {
//   const result = x + y;
//   return result;
// }

// add(2, 5); // doesn't print anything
// console.log(add(2, 5));



// console.log(person)
// console.log(person["age"])
// console.log(person.name)

person.greeting()
const a = [1, 'two', 3.14, false, ['this is', 'an object']]

// console.log(a[2])   // prints 3.14


