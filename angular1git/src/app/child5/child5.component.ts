import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child5',
  templateUrl: './child5.component.html',
  styleUrls: ['./child5.component.css']
})
export class Child5Component implements OnInit {
  @Input() mobile: {imgUrl: string , name: string ,description: string} ;
  constructor() { }

  ngOnInit() {
  }

}
