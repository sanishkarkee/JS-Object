console.log('<< ---------- LEARNING OBJECT ( zero to Advanced ) ---------- >>');

// let user = {
//   name: 'David',
//   age: 25,
//   'is admin': true,
// };

// console.log(user);
// console.log('User name is: ', user.name); // David
// console.log('Age is: ', user.age); // 40

// ---------- Adding new properties to OBJECT
// user.isSeniorCitizen = false;
// console.log('Are you old man? ', user.isSeniorCitizen); // false
// console.log('Are you admin? ', user['is admin']);

// ---------- Modifying and deleting the properties]
// user.age = 34;
// user['is admin'] = false;

// delete user['is admin'];
// console.log(user);

// ---------- Accessing dynamic key value
// const someKey = 'age';

// console.log(user[someKey]); // 25

// ---------- CREATING OBJECT:  Create object with dynamic values
// let car = 'carName';
// let favCars = {
//   [car]: 5,
// };
// console.log(favCars);

// ---------- CREATING OBJECT:  Constructor function, convention: name should start with CAPITAL Letter
// function Car(name, model) {
//   this.name = name;
//   this.model = model;
// }
// const hondaCar = new Car('Sanish', 'Honda');
// const toyotaCar = new Car('Puskar', 'Toyota');
// console.log(hondaCar);
// console.log(toyotaCar);

// ----------CREATING OBJECT: using OBJECT() constructor
// const person = new Object();
// person.name = 'Micheal';
// person.age = 35;
// console.log(person);

// ----------CREATING OBJECT: using FACTORY FUNCTION
// function createUser(name, age) {
//   return {
//     name,
//     age,
//   };
// }
// const user1 = createUser('Sanish', 35);
// const user2 = createUser('Puskar', 56);
// console.log(user1, user2);

// ---------- OBJECT METHODS
let profile = {
  name: 'Tapas',
  company: 'CreoWis',
  message: function () {
    console.log(`${this.name} works at ${this.company}`);
  },
  address: {
    city: 'Bangalore',
    pin: 563032,
    state: 'Karnataka',
    country: 'India',
    greeting: function () {
      console.log('Welcome to India');
    },
  },
};

profile.message();
console.log(profile.name);
console.log(profile.company);
console.log(profile.address.country);
profile.address.greeting();
