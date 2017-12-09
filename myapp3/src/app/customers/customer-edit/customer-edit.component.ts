import { Component, OnInit, Input, 
  OnChanges, SimpleChanges, DoCheck, 
  OnDestroy, Output, EventEmitter } from '@angular/core';
import { Customer } from '../model/customer';
import { ModalDirective } from 'ngx-bootstrap'

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.less']
})
export class CustomerEditComponent implements OnInit, DoCheck, OnChanges, OnDestroy {

  @Input()  customer: Customer = new Customer();
  temp: Customer = new Customer;

  @Output() updateEvent: EventEmitter<Customer> = new EventEmitter();
  @Output() cancelEvent: EventEmitter<string> = new EventEmitter();
  constructor() {
    console.log("In Constructor");
   }

  ngOnInit() {
    console.log("In OnInit");
  }

  ngDoCheck(){
    console.log("In OnDoCheck");
  }

  ngOnChanges(changes: SimpleChanges){
    console.log("In OnChanges");
    console.log(changes);
    Object.assign(this.temp,this.customer);
  }

  ngOnDestroy(){
    console.log("In OnDestroy");
  }

  save(){
    // Object.assign(this.customer,this.temp);
    this.updateEvent.emit(this.temp);
  }

  cancel(){
    this.cancelEvent.emit("Update Cancelled..");
  }
}
