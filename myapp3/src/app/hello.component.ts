import {Component} from '@angular/core';

@Component({
    selector:"hello",
    template:`
        <h3>First Angular Component</h3>
        <h4>{{message}}</h4>
    `

})
export class HelloComponent{
    message : string;
    constructor(){
        this.message="Hello Angular";
    }
}