import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomersModule } from './customers/customers.module'


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component'
import { DataBindingComponent} from './databinding.component'

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    DataBindingComponent
  ],
  imports: [
    BrowserModule, FormsModule, CustomersModule
  ],
  providers: [],
  bootstrap: [AppComponent,HelloComponent]
})
export class AppModule { }
