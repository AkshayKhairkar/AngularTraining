import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Http, URLSearchParams, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.less']
})
export class RxjsComponent implements OnInit {

  searchGroup: FormGroup;
  results: Array<string>;

  constructor( private http: Http) { 

    var obs = Observable
      .interval(1000)
      .take(5)
      .do((value)=>{console.log("In Do: " + value);}) //Lambda Expression
      .filter((value)=> value >= 2)
      .map(x => x*x) 
      .share();
      
      
      // .do(function(value){
      //   console.log("In Do: " + value);
      // });

    // obs.subscribe(function(result){
    //    console.log("Sub1: "+ result);
    // });

    // obs.subscribe((result)=>console.log("Sub1: "+ result));
    // obs.subscribe((result)=>console.log("Sub2: "+ result));
  }

  ngOnInit() {

    this.searchGroup=new FormGroup({
      search: new FormControl("",[Validators.required, Validators.minLength(3)])
    });

    this.searchGroup
      .get("search")
      .valueChanges
      .debounceTime(500)
      .filter((input)=>{return this.searchGroup.get("search").valid})   //Always get a handler to the SearchGroup
      .subscribe(input=> {

        console.log(input);
        //https://en.wikipedia.org/w/api.php?search=mumbai&format=json
        var url = "https://en.wikipedia.org/w/api.php";
        var searchParams = new URLSearchParams();
        searchParams.set("action","opensearch");
        searchParams.set("search",input);
        searchParams.set("format","json");
        searchParams.set("origin","*");

        this.http
          .get(url, new RequestOptions({params: searchParams}))
          .subscribe(resp => {
            //console.log(resp);
            console.log(resp.json()[1]);
            this.results = resp.json()[3];
          }, resp => console.log("error"));

      })
  }

}
