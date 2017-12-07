import{Bank} from './employee';
import{Car, Vehicle} from './interfaces';

var message : string = "Hello Typescript";
console.log(message);

//message =10;

var age: number = 45;
console.log("Age : "+age);

//age="30";

var x; //By default its datatype is any

x=10;
console.log("X: "+x);
x="Good Morning";
console.log("X :"+x);

var obj: Bank.Employee = new Bank.Employee();
var car: Vehicle = new Car();