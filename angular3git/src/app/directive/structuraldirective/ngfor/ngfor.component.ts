import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {
 products = [
   {
     img :'https://cdn.pixabay.com/photo/2016/11/29/09/00/abundance-1868573__480.jpg',
     name : 'cake',
     price : 300
   },
   {
     img : 'https://cdn.pixabay.com/photo/2016/03/02/20/13/shopping-1232944_1280.jpg',
     name : 'fruits',
     price : 400
   }
 ];
  constructor() { }

  ngOnInit() {
  }

}
