// let variableName: type;
// let variableName: type = value;
// const constantName: type = value;

let counter : number;
counter = 1;

// console.log(counter);

let counter2 : number;
// counter2 = '';

let counter3 : number = 1;

let name: string = 'John';
let age: number = 25;
let active: boolean = true;

// Array
// let ArrayName: type[];

let names: string[] = ['John', 'Jane', 'Peter', 'David', 'Mary'];
// console.log(names);

//Objects
let person: {
    name: string;
    age: number;
  };
  
  person = {
    name: 'John',
    age: 25,
  }; // valid

// console.log(person);

//Function
let greeting : (name: string) => string;

greeting = function (name: string) {
    return `Hi ${name}`;
};

// console.log(greeting('daniel'));

