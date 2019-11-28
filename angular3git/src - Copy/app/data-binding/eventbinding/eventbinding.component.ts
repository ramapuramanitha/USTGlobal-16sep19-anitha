import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent implements OnInit {
  InputData =""
  constructor() { }

  ngOnInit() {

  }
  printAlertmsg() {
    alert('Hai Hello from Angular');
  }
dataInput(event){
  console.log(event.target.value);
  this.InputData = event.target.value;
}
}

