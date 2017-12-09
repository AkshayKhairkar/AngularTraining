import { Customer } from '../model/customer';


export abstract class CustomerService {
    abstract getCustomers(): any;
    abstract saveCustomer(customer: Customer): any;
    abstract updateCustomer(customer: Customer): any;


}
