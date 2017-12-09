import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomersModule } from './customers/customers.module';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DataBindingComponent} from './databinding.component';

const routes: Routes = [
  {path:"home", component: HelloComponent},
  {path:"binding", component: DataBindingComponent},
  {path:"", redirectTo:"/home", pathMatch:"full"},
  {path:"**", component:DataBindingComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    DataBindingComponent
  ],
  imports: [BrowserModule, FormsModule, CustomersModule, RouterModule.forRoot(routes)],
  providers: [],
  // bootstrap: [AppComponent,HelloComponent]
  bootstrap: [AppComponent]
})
export class AppModule { 
  

}
