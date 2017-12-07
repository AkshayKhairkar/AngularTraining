"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    applyBrakes(decrement) {
        this.speed -= decrement;
    }
    //implementation(1)
    constructor(name, speed, gears) {
        this.name = name;
        this.speed = speed;
        this.gears = gears;
    }
}
exports.Car = Car;
var car3 = new Car("Maruti", 400);
var car1 = new Car();
car1.name = "AUDI";
car1.speed = 100;
car1.gears = 6;
console.log("Name: " + car1.name);
console.log("Speed: " + car1.speed);
console.log("Gears: " + car1.gears);
car1.applyBrakes(50);
console.log("New Speed: " + car1.speed);
