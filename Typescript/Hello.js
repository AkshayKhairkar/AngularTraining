"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const employee_1 = require("./employee");
const interfaces_1 = require("./interfaces");
var message = "Hello Typescript";
console.log(message);
//message =10;
var age = 45;
console.log("Age : " + age);
//age="30";
var x; //By default its datatype is any
x = 10;
console.log("X: " + x);
x = "Good Morning";
console.log("X :" + x);
var obj = new employee_1.Bank.Employee();
var car = new interfaces_1.Car();
