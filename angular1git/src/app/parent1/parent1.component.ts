import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component implements OnInit {
  selectedCar: any;
  Cars = [
    {
      imgUrl : 'https://cdn.pixabay.com/photo/2016/11/22/23/44/buildings-1851246__480.jpg',
      name : 'Maruti Swift' ,
      price : 2000000,
      // tslint:disable-next-line: max-line-length
      description: 'The Maruti Swift has 1 Diesel Engine and 1 Petrol Engine on offer. The Diesel engine is 1248 cc while the Petrol engine is 1197 cc. Depending upon the variant and fuel type the Swift has a mileage of 22.0 to 28.4 kmpl. The Swift is a 5 seater Hatchback and has a length of 3840mm.'
    },
    {
      imgUrl : 'https://cdn.pixabay.com/photo/2015/09/02/12/25/bmw-918408__480.jpg',
      name : 'Bmw',
      price: 3000000,
      // tslint:disable-next-line: max-line-length
      description: 'BMW cars price starts at Rs. 35.20 lakh for the cheapest car X1 and goes up to Rs. 2.43 crore for the top model BMW 7 Series. BMW offers 14 new car models in India. X1 (Rs. 35.20 lakh), Z4 (Rs. 64.90 lakh) and 3 Series GT (Rs. 47.70 lakh) are among the popular cars from BMW.'
    },
    {
      imgUrl : 'https://cdn.pixabay.com/photo/2014/09/07/22/34/car-race-438467__480.jpg',
      name : 'Lamborghini Swift',
      price: 5000000,
      // tslint:disable-next-line: max-line-length
      description: 'The Lamborghini Swift has 1 Lamborghini Engine and 1 Lamborghini Engine on offer. The Diesel engine is 5000 cc while the Petrol engine is 5000 cc. Depending upon the variant and fuel type the Swift has a mileage of 3.0 to 5.0 kmpl. The Swift is a 5 seater Hatchback and has a length of 5000.'
    },
    {
      imgUrl : 'https://cdn.pixabay.com/photo/2017/03/05/15/29/aston-2118857__480.jpg',
      name : 'Audi A3' ,
      price: 4000000,
      // tslint:disable-next-line: max-line-length
      description: 'Audi A3 Variants & Price: The Audi A3 is available in two variants: Premium Plus and Technology, priced from Rs 28.99 lakh to 31.99 lakh (ex-showroom pan-India). Audi A3 Engines: The A3 comes with a 1.4-litre TFSI turbocharged petrol engine that makes 150PS of power and 250Nm.'
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
