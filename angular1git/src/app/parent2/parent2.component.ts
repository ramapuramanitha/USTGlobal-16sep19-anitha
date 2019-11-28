import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrls: ['./parent2.component.css']
})
export class Parent2Component implements OnInit {
  selectedBike: any;
  Bikes = [
    {
      imgUrl : 'https://cdn.pixabay.com/photo/2016/03/27/17/59/vintage-1283299__480.jpg',
      name : 'Audi',
      price: 200000,
      // tslint:disable-next-line: max-line-length
      description: 'Audi  Variants & Price: The Audi A3 is available in two variants: Premium Plus and Technology, priced from Rs 28.99 lakh to 31.99 lakh (ex-showroom pan-India). Audi A3 Engines: The A3 comes with a 1.4-litre TFSI turbocharged petrol engine that makes 150PS of power and 250Nm.'
    },
    {
      imgUrl : 'https://cdn.pixabay.com/photo/2016/01/19/16/46/motorcycle-1149389__480.jpg' ,
      name : 'Vintage',
      price: 150000,
      // tslint:disable-next-line: max-line-length
      description: 'Vintage price starts at Rs. 35.20 lakh for the cheapest car X1 and goes up to Rs. 2.43 crore for the top model BMW 7 Series. BMW offers 14 new car models in India. X1 (Rs. 35.20 lakh), Z4 (Rs. 64.90 lakh) and 3 Series GT (Rs. 47.70 lakh) are among the popular cars from BMW.'
    },
    {
      imgUrl : 'https://cdn.pixabay.com/photo/2016/11/18/21/30/bike-1836962__480.jpg',
      name : 'Suzuki',
      price: 6700000,
      // tslint:disable-next-line: max-line-length
      description: 'The Suzuki has 1 kerosine Engine and 1 Diesel Engine on offer. The Diesel engine is 1248 cc while the kersine engine is 466 cc. Depending upon the variant and fuel type the Swift has a mileage of 22.0 to 28.4 kmpl. The Suzuki is a 5 seater Hatchback and has a length of 3840mm.'
    },
    {
      imgUrl : 'https://cdn.pixabay.com/photo/2016/03/31/22/47/motorbike-1297213__480.png',
      name : 'Maruti Swift',
      price: 8500000,
      // tslint:disable-next-line: max-line-length
      description: 'The Maruti Swift has 1 Diesel Engine and 1 Petrol Engine on offer. The Diesel engine is 1248 cc while the Petrol engine is 1197 cc. Depending upon the variant and fuel type the Swift has a mileage of 22.0 to 28.4 kmpl. The Swift is a 5 seater Hatchback and has a length of 3840mm.'
    }
  ];
  constructor() { }

  ngOnInit() {
  }
  sendBike(bike) {
    this.selectedBike = bike;
    console.log(bike);
  }
}
