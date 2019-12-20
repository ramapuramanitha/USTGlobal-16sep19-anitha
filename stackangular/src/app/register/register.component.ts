import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private http: HttpClient, private add: AuthService , private router: Router) { }
  register(registerForm: NgForm) {
  this.http.post(`${this.add.baseURL}/registeruser`,registerForm.value).subscribe(response =>{
    if (response != null) {
      alert('User Registered Successfully');
      this.router.navigate(['/login']);
     } else {
        alert('failed to add Book');
      }
      });
    }

ngOnInit() {
  }

}

