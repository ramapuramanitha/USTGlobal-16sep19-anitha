import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { LoginResponse } from './loginresponse';

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.css']
})
export class SearchBookComponent implements OnInit {

  studentData: LoginResponse;
  books: LoginResponse;

  constructor(private http: HttpClient,
              private router: Router,
              private service: AuthService) { }

  ngOnInit() {
  }
  getStudentInfo(deleteStudent: NgForm) {
    this.http.get<LoginResponse>(`${this.service.baseURL}/searchbook/${deleteStudent.value.bid}`)
    .subscribe(response => {
      if (response != null) {
        this.books = response;
        this.studentData = response;
      } else {
        alert('No Student Data Present form ID' + deleteStudent.value.id);
      }
      this.studentData = response;
      console.log(response);
    });
  }
  deleteStudent(bid) {
    console.log(bid);
    this.http.delete(`${this.service.baseURL}/deletebook/${bid}`)
    .subscribe(response => {
      if (response) {
        alert('Student Deleted successfully');
        console.log(response);
      } else {
        alert('Failed to delete the Student');
        this.router.navigate(['/']);
      }
   });
  }
}
