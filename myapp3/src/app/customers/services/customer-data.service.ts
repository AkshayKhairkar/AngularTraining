import { Injectable } from '@angular/core';
import { CustomerService } from './customer-service';
import { Customer } from '../model/customer'; 
import { Http , RequestOptions, Headers} from '@angular/http'
import { environment } from '../../../environments/environment'
@Injectable()

export class CustomerDataService extends CustomerService{

  url: string;

  constructor(private http: Http) {
    super();
    this.url=environment.customerUrl;
  }

  getCustomers():any{
    console.log("CustomerDataService: getCustomers");

    return this.http.get(this.url);//.subscribe(resp =>{return resp.json;});

    //here we directly return the Observable or Promise to the invoker, since the http.get call is an async call 
  }

  saveCustomer(customer: Customer):any{

    var requestHeaders = new Headers({"Content-Type":"application/json"});
    return this.http.post(
                      this.url,
                      customer,
                      new RequestOptions({headers:requestHeaders}));

  }

  updateCustomer(customer: Customer):any{

    var requestHeaders = new Headers({"Content-Type":"application/json"});
    return this.http.put(
                      this.url,
                      customer,
                      new RequestOptions({headers:requestHeaders}));
    
  }
}
