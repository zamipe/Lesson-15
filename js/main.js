// alert('Hello world!');
// console.log('Hello world');
console.log(123);
console.log(123123123123123123123123123123123123123123123123123123123123);
console.log(-321); // integer/ int = veselie skaitļi


console.log(3.14); // floating point number / float = daļskaitļi
console.log(3.1111222233334444);

console.log('Hello world'); // string, teksts sākas un beidzas ar single quote (')
console.log("Hello world"); // string 
console.log(`Hello world`); // string ES6 / WS2016
console.log('Foo\'s Car'); // 
console.log('Foo"s Car');
console.log(' \\ ')
console.log("<span class=\"foo\"></span>");
console.log('<span class=\"foo\"></span>');

console.log(true); // bool
console.log(false); // bool

console.log(null); // null 
console.log(undefined); // undefined

var someVar; // mainīgais (variable)
console.log(someVar);
var someNumber = 123;
console.log(someNumber); // 123
someNumber = 321;
console.log(someNumber); // 321
someNumber = 'some text';
console.log(someNumber); // some text
someNumber = 123;
console.log(someNumber); // 123 (string)

let someOtherNumber = 123;
console.log(someOtherNumber);
someOtherNumber = 321;
console.log(someOtherNumber);

const someConstant = 'Foo';
console.log(someConstant);

let cars = [
    'vaz',
    'zaz',
    'gaz',
    'maz',
    'uaz',
    'bmw'
]; // array; "masīvs" latviski; var būt izkārtots vertikāli - kv.iekavas augšā, katra vienība savā līnijā, apakšas kv.iekavas zemāk
console.log(cars);
console.log([123, cars]);
console.log(cars[2]); //pirmais cipars ir nulle, ne viens
cars[1] = 'audi'; //aizvieto iepriekšējā sarakstā esošo nr 2 zaz a audi
console.log(cars);
cars.push('tesla'); // pievieno sarakstam vēl vienu
console.log(cars);
console.log(cars.length);

console.log('foo' + 'bar'); //concatenation
console.log('foo' + "bar");

let name = 'Mirdza';
console.log('Hello, ' + name);
console.log(`Hello, ${name}`); //interpolation; te lieto apostrofus, kas pa kreisi no "1" backtick syntax/ teplate literals 
console.log(`Hello, ${name}, go and drive a ${cars[1]}`);

let person = {
    name: 'John',
    lastName: 'Doe',
    age: '42', //key: 'value'
};

console.log(person);
console.log(person.lastName);
person.name = 'Billy';
console.log(person.name);
console.log(person['name']);

const people = [
    {
        name: 'John',
        lastName: 'Doe',
        age: '42',
    },
{
        name: 'Jane',
        lastName: 'Doe',
        age: '42',
    }
];
console.log(people[1]['name']);
console.log(people[1].name);

//Hello, my name is [name], I live in [Address] and my favourite number is [number]!
