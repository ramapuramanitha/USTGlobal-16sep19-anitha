import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {
name: string = 'Anitha';
imgUrl: string = 'https://cdn.pixabay.com/photo/2019/09/26/15/46/girl-4506318__480.jpg';
address = 'kanala,sanajamal-518165';
colorName = 'blue';
isActive: boolean = false;
  constructor() { }

 
  ngOnInit() {
    setInterval(() => {
  this.colorName = 'yellow';
  this.isActive = !this.isActive;
 }, 2000);
  }
}
