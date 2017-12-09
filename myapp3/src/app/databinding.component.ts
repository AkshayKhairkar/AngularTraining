import { Component} from '@angular/core';

@Component({
    selector:"data-binding",
    templateUrl: './databinding.component.html'
})

export class DataBindingComponent{

    user = {firstName: "Akshay", lastName:"Khairkar"};
    count = 10;

    inc(evt)
    {
        console.log(evt);
        this.count++;
    }

    message="Hello";
}