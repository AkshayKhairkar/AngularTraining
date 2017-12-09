import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { DataTableModule, SharedModule} from 'primeng/primeng'

import { CustomerComponent } from './customer/customer.component';
import { CustFilterPipe } from './cust-filter.pipe';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { RxjsComponent } from './rxjs/rxjs.component';

import { CustomerService } from './services/customer-service';
import { CustomerMockService } from './services/customer-mock.service';
import { CustomerDataService } from './services/customer-data.service';
import { CustDetailsComponent } from './cust-details/cust-details.component';

const routes: Routes = [
  {path:"customers", component: CustomerComponent},
  {path:"rxjs", component: RxjsComponent},
  {path:"customers/:id", component: CustDetailsComponent}
]

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ModalModule, HttpModule, RouterModule.forChild(routes),
  DataTableModule, SharedModule],
  
  declarations: [CustomerComponent, CustFilterPipe, CustomerEditComponent, RxjsComponent, CustDetailsComponent],
  
  exports: [CustomerComponent,RxjsComponent],

  providers: [{provide: CustomerService, useClass: CustomerDataService}]
})

export class CustomersModule { }
