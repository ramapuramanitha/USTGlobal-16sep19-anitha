import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent3',
  templateUrl: './parent3.component.html',
  styleUrls: ['./parent3.component.css']
})
export class Parent3Component implements OnInit {
  selectedMovie;
  Movies = [
    {
      imgUrl : 'https://cdn.pixabay.com/photo/2017/08/10/00/52/house-2616607__480.jpg',
      name : 'Spider-Man' ,
      rating: 6 / 10,
      // tslint:disable-next-line: max-line-length
      description: 'Spider-Man is a fictional superhero created by writer-editor Stan Lee and writer-artist Steve Ditko. He first appeared in the anthology comic book Amazing Fantasy #15 in the Silver Age of Comic Books.'
    },
    {
      imgUrl : 'https://cdn.pixabay.com/photo/2016/10/04/08/58/theater-1713815__480.jpg' ,
      name : 'curtain',
      rating: 5 / 10,
      // tslint:disable-next-line: max-line-length
      description: 'Adrift in space with no food or water, Tony Stark sends a message to Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, the remaining Avengers'
    },
    {
      imgUrl : 'https://cdn.pixabay.com/photo/2014/12/09/20/27/child-562297__480.jpg',
      name : 'Charles  Chaplin',
      rating: 8 / 10,
      // tslint:disable-next-line: max-line-length
      description: 'Sir Charles Spencer Chaplin KBE was an English comic actor, filmmaker, and composer who rose to fame in the era of silent film. He became a worldwide icon through his screen persona, "The Tramp", and is considered one of the most important figures in the history of the film industry.'
    },
    {
      imgUrl : 'https://cdn.pixabay.com/photo/2018/01/29/19/00/park-3116883__480.jpg',
      name : 'Bench Night' ,
      rating: 7 / 10,
      // tslint:disable-next-line: max-line-length
      description: 'Deprived of his mighty hammer Mjolnir, Thor must escape the other side of the universe to save his home, Asgard, from Hela, the goddess of death.'
    }
  ];
  constructor() { }

  ngOnInit() {
  }
  sendMovie(movie) {
    this.selectedMovie =  movie;
    console.log(movie);
  }
}
