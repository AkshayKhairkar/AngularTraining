import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap';

import { CustomerComponent } from './customer/customer.component';
import { CustFilterPipe } from './cust-filter.pipe';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';

@NgModule({
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, ModalModule
  ],
  declarations: [CustomerComponent, CustFilterPipe, CustomerEditComponent],
  exports: [CustomerComponent]
})
export class CustomersModule { }
