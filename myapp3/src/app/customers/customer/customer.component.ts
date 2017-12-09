import { Component, OnInit,TemplateRef } from '@angular/core';
import { Customer } from '../model/customer';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { CustomerService } from '../services/customer-service'
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

  constructor(private service: CustomerService) {
    
    var self = this;

    service
      .getCustomers()
      // .subscribe(resp =>{
      //     this.data=resp.json();
      // })
      .subscribe(function(resp){
        self.data=resp.json();
      })

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

    this.service
      .saveCustomer(this.current)
      .subscribe(resp => {
        this.data.push(this.current);
        this.current = new Customer();
        alert("saved");
      }, resp => {
        alert("Save failed. Status: "+resp.status);
      });

    // this.data.push(this.current);
    // this.current = new Customer(); 
  }

  edit(customer: Customer){
    this.selected = customer;
  }

  editUpdate(cust){
        
    this.service
    .updateCustomer(cust)
    .subscribe(resp => {
      Object.assign(this.selected, cust);
      this.selected=null;
      alert("Update Completed");
    }, resp => {
      alert("Update failed. Status: "+ resp.status);
    });

    // Object.assign(this.selected, cust);
    // this.selected=null;
  }

  editCancel(msg){
    this.selected=null;
    alert("Update Cancelled..");
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
