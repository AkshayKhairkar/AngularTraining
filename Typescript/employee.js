"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Bank;
(function (Bank) {
    //export indicates that the class is available outside the namespace
    class Employee {
        //the parameters of the constructor automatically become members of the class
        constructor(id, name, salary) {
            this.id = id;
            this.name = name;
            this.salary = salary;
        }
        get location() {
            return this._location;
        }
        set location(value) {
            this._location = value;
        }
    }
    Bank.Employee = Employee;
})(Bank = exports.Bank || (exports.Bank = {}));
var emp = new Bank.Employee(1, "Anil", 8000);
console.log("Id : " + emp.id);
console.log("Name : " + emp.name);
console.log("Salary : " + emp.salary);
emp.location = "Mumbai";
console.log("Location ; " + emp.location);
