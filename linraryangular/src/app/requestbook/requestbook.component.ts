import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-requestbook',
  templateUrl: './requestbook.component.html',
  styleUrls: ['./requestbook.component.css']
})
export class RequestbookComponent implements OnInit {

  constructor(private http: HttpClient, private add: AuthService, private router: Router) { }
  requestBook(requestBookForm: NgForm) {
    this.http.post(`${this.add.baseURL}/requestingbook`, requestBookForm.value).subscribe(response => {
    if (response != null) {
      alert('Book request saved');
      this.router.navigate(['/request-status']);
    } else {
      alert('Failed to save the request');
    }
    });
  }


  ngOnInit() {
  }

}
