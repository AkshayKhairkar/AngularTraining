import { Component, OnInit,TemplateRef } from '@angular/core';
import { Customer } from '../model/customer';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.less']
})
export class CustomerComponent implements OnInit {

  data: Array<Customer>;
  current: Customer = new Customer();
  searchText: string;
  selected: Customer;
  myFormGroup: FormGroup;
  modalRef: BsModalRef; 
  modalService: BsModalService; 

  constructor() { 
    this.data = new Array<Customer>();
    this.data.push(new Customer(1, "Google", "Mumbai"));
    this.data.push(new Customer(2, "Oracle", "Bengaluru"));
    this.data.push(new Customer(3, "Microsoft", "Hyderabad"));
    this.data.push(new Customer(4, "Apple", "Mumbai"));
  }

  ngOnInit() {
    this.myFormGroup= new FormGroup({
      id: new FormControl("",[Validators.required],[]),
      name: new FormControl("",[Validators.required,Validators.minLength(3)],[]),
      location: new FormControl("",[Validators.required,Validators.pattern("[A-Za-z]{2,}")],[])
    });
  }

  save(){
    this.data.push(this.current);
    this.current = new Customer(); 
  }

  edit(customer: Customer){
    this.selected = customer;
  }

  editUpdate(cust){
    Object.assign(this.selected, cust);
    this.selected=null;
  }

  editCancel(msg){
    this.selected=null;
    alert("Update Cancelled..");
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
