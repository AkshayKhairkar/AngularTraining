export namespace Bank{
    //export indicates that the class is available outside the namespace
export class Employee{

    private _location: string;

    //the parameters of the constructor automatically become members of the class
    constructor(public id?:number, public name?:string, public salary?: number){}
    get location(){
        return this._location;
    }

    set location(value: string){
        this._location= value;
    }
}
}

var emp: Bank.Employee = new Bank.Employee(1, "Anil", 8000);
console.log("Id : "+emp.id)
console.log("Name : "+emp.name)
console.log("Salary : "+emp.salary)
emp.location = "Mumbai"
console.log("Location ; "+emp.location)