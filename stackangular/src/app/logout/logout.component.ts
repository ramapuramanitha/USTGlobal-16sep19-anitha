import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  Response = true;
  constructor(private http: HttpClient, private add: AuthService , private router: Router) { }
  login() {
 if (Response) {

      this.router.navigate(['/login']);
     } else {
      this.router.navigate(['/login']);
      }

    }


  ngOnInit() {
  }

}



