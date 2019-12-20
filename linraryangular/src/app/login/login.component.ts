import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, private add: AuthService , private router: Router) { }
  login(loginForm: NgForm) {
  this.http.post(`${this.add.baseURL}/login/{id}/{password}`, loginForm.value).subscribe(response =>{
    if (response != null) {
      alert('User Login Successfully');
      this.router.navigate(['/login']);
     } else {
        alert('failed to add Book');
      }
      });
    }


  ngOnInit() {
  }

}
