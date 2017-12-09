//import { Injectable } from '@angular/core';
import { CustomerService } from './customer-service';
import { Customer } from '../model/customer';

//@Injectable()
export class CustomerMockService extends CustomerService{

  constructor() { 
    super();
  }

  getCustomers():any{
    console.log("CustomerMockService: getCustomers")
  }

  saveCustomer(customer: Customer):any{

  }

  updateCustomer(customer: Customer):any{
    
  }

}
