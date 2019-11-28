import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moviename',
  templateUrl: './moviename.component.html',
  styleUrls: ['./moviename.component.css']
})
export class MovienameComponent implements OnInit {
  movies = [
    {
      imgUrl : 'https://cdn.pixabay.com/photo/2015/01/11/09/19/film-596009__480.jpg',
      name : 'quircky'
    },
    {
      imgUrl : 'https://cdn.pixabay.com/photo/2016/01/19/16/49/old-tv-1149416__480.jpg' ,
      name : 'curtain'
    },
    {
      imgUrl : 'https://cdn.pixabay.com/photo/2015/07/02/10/07/audience-828584__480.jpg',
      name : 'snow'
    }
    ];
 constructor() { }

  ngOnInit() {
  }

}
