import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent4',
  templateUrl: './parent4.component.html',
  styleUrls: ['./parent4.component.css']
})
export class Parent4Component implements OnInit {
  selectedLaptop: any;
  Laptops = [
    {
      imgUrl : ' https://cdn.pixabay.com/photo/2018/02/16/10/52/beverage-3157395__480.jpg' ,
      name : 'blogger',
      price:  40000,
      // tslint:disable-next-line: max-line-length
      description: '2.4GHz 8-core Intel Core i9, Turbo Boost up to 5.0GHz, with 16MB shared L3 cache. 32GB of 2400MHz DDR4 memory. Radeon Pro 560X with 4GB of GDDR5 memory. 2.4GHz 8-core Intel Core i9, Turbo Boost up to 5.0GHz, with 16MB shared L3 cache. 32GB of 2400MHz DDR4 memory. Radeon'
    },
    {
      imgUrl : 'https://cdn.pixabay.com/photo/2014/09/24/14/29/mac-459196__480.jpg' ,
      name : 'Dell',
      price: 60000,
      // tslint:disable-next-line: max-line-length
      description: 'Dell 15 7000 Crafted From Brushed Aluminium. Laptop W/ Intel Core. Shop Today! Sennheiser Headset @ 299. Get 3Yr Premium Support. Cash off on MS Office. Get Warranty Worth@₹3999. Amenities: Dell Power Companion, Dell Bluetooth Mouse.'
    },
    {
      imgUrl : 'https://cdn.pixabay.com/photo/2016/06/28/05/10/laptop-1483974__480.jpg',
      name : 'HP',
      price: 80000,
      // tslint:disable-next-line: max-line-length
      description: 'HP Pavilion x360 With Alexa In-built. Freedom To Do More w/ Power Of Your Voice. Shop Now! Accidental Protection. Protegent Antivirus. Additional Warranty. Theft Insurance. Models: HP Pavilion x360 14, HP Gaming Pavilion - 15, OMEN by HP 15, HP Notebook - 15.'
    },
    {
      imgUrl : 'https://cdn.pixabay.com/photo/2016/03/27/07/12/apple-1282241__480.jpg',
      name : 'ASUS',
      price: 60000,
      // tslint:disable-next-line: whitespace
      // tslint:disable-next-line: max-line-length
      description: 'ASUS Laptop X407UB. Processor. Intel® Core™ i3 6006U Processor, 2 GHz (3 M Cache) Operating System. Windows 10 Pro - ASUS recommends Windows 10 Pro. Memory. DDR4 2400MHz SDRAM, 1 x SO-DIMM socket , up to 8 GB SDRAM. Display. 14.0" (16:9) LED-backlit HD (1366x768) 60Hz Anti-Glare Panel with 45% NTSC. Graphic Storage.'
    }
  ];
  constructor() { }

  ngOnInit() {
  }
  sendLaptop(laptop) {
    this.selectedLaptop = laptop;
    console.log(laptop);
  }
}
