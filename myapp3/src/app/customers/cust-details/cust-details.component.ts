import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-cust-details',
  templateUrl: './cust-details.component.html',
  styleUrls: ['./cust-details.component.less']
})
export class CustDetailsComponent implements OnInit {
  
  currentId: string;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {

    activatedRoute.params.subscribe(value => {
      // this.currentId = value.id;
      this.currentId = value["id"];
    })
   }

  ngOnInit() {
  }

  back(){
    this.router.navigate(["/customers"]);
  }

}
