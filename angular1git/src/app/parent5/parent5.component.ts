import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent5',
  templateUrl: './parent5.component.html',
  styleUrls: ['./parent5.component.css']
})
export class Parent5Component implements OnInit {

  selectedMobiles;
  Mobiles = [
    {
      imgUrl : 'https://cdn.pixabay.com/photo/2017/04/03/15/52/mobile-phone-2198770__480.png',
      name : 'lenovo',
      price: 20000,
      // tslint:disable-next-line: max-line-length
      description: '.4GHz 8-core Intel Core i9, Turbo Boost up to 5.0GHz, with 16MB shared L3 cache. 32GB of 2400MHz DDR4 memory. Radeon Pro 560X with 4GB of GDDR5 memory. 2.4GHz 8-core Intel Core i9, Turbo Boost up to'
      },
    {
      imgUrl : 'https://cdn.pixabay.com/photo/2013/07/13/12/46/iphone-160307__480.png' ,
      name : 'Iphone 5',
      price: 100000,
      // tslint:disable-next-line: max-line-length
      description: 'Iphone 5 Crafted From Brushed Aluminium. Laptop W/ Intel Core. Shop Today! Sennheiser Headset @ 299. Get 3Yr Premium Support. Cash off on MS Office. Get Warranty Worth@₹3999. Amenities: Dell Power Companion, Dell Bluetooth Mouse.'
      },
    {
      imgUrl : 'https://cdn.pixabay.com/photo/2017/01/06/13/50/smartphone-1957742__480.jpg',
      name : 'samsung' ,
      price: 30000,
      // tslint:disable-next-line: max-line-length
      description: 'Samsung Galaxy With Alexa In-built. Freedom To Do More w/ Power Of Your Voice. Shop Now! Accidental Protection. Protegent Antivirus. Additional Warranty. '
     },
    {
      imgUrl : 'https://cdn.pixabay.com/photo/2016/11/23/14/44/blur-1853302__480.jpg',
      name : 'ASUS',
      price: 50000,
      // tslint:disable-next-line: max-line-length
      description: 'ASUS Mobile X407UB. Processor. Intel® Core™ i3 6006U Processor, 2 GHz (3 M Cache) Operating System. Windows 10 Pro - ASUS recommends Windows 10 Pro. Memory. DDR4 2400MHz SDRAM, 1 x SO-DIMM'
    }
  ];
  constructor() { }

  ngOnInit() {
  }
  sendMobiles(mobile) {
    this.selectedMobiles = mobile;
    console.log(mobile);
  }
}
