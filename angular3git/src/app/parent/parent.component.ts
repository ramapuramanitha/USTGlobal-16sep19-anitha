import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  selectedCar;
    Cars = [
      {
        imgUrl : 'https://cdn.pixabay.com/photo/2014/09/07/22/34/car-race-438467__480.jpg',
        name : 'Benz'
      },
      {
        imgUrl : 'https://cdn.pixabay.com/photo/2015/09/02/12/25/bmw-918408__480.jpg',
        name : 'Bmw'
      },
      {
        imgUrl : 'https://cdn.pixabay.com/photo/2017/03/05/15/29/aston-2118857__480.jpg',
        name : 'Ferrari'
      },
      {
        imgUrl : 'https://cdn.pixabay.com/photo/2013/08/11/03/40/corvette-171422__480.jpg',
        name : 'Astin'
      }
    ];
  constructor() { }

  ngOnInit() {
  }
  sendCar(car) {
    this.selectedCar = car;
    console.log(car);
  }
   }
