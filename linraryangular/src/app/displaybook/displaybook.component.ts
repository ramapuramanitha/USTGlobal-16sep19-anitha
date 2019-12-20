import { Component, OnInit } from '@angular/core';
import { DisplayServiceService } from '../display-service.service';

@Component({
  selector: 'app-displaybook',
  templateUrl: './displaybook.component.html',
  styleUrls: ['./displaybook.component.css']
})
export class DisplaybookComponent implements OnInit {
  books;
  constructor(myService: DisplayServiceService) {
    console.log('Hi from Products Component');
    myService.getData()
    .subscribe(responseData => {
      console.log('this is my data');
      console.log(responseData);
      this.books = responseData;
    }, error => {
      console.log(error);
    });
    console.log('subscription ended');
  }
  

  ngOnInit() {
  }

}
