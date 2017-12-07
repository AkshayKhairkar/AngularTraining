export interface Vehicle{
    name: string;
    speed: number;
    gears?: number;

    applyBrakes(decrement: number): void;
}

export class Car implements Vehicle{
    name: string;
    speed: number;
    gears?: number;

    applyBrakes(decrement: number): void{
        this.speed -= decrement;
    }

    //Multiple Declarations
    constructor();
    constructor(name: string, speed:number);
    constructor(name: string, speed:number, gears:number);

    //implementation(1)
    constructor(name?: string, speed?:number, gears?:number){
        this.name=name;
        this.speed=speed;
        this.gears=gears;
    }


}

var car3: Vehicle = new Car("Maruti",400);
var car1: Vehicle = new Car();
car1.name="AUDI";
car1.speed=100;
car1.gears=6;

console.log("Name: "+car1.name);
console.log("Speed: "+car1.speed);
console.log("Gears: "+car1.gears);

car1.applyBrakes(50);
console.log("New Speed: "+car1.speed);