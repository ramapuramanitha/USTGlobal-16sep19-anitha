import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-issue-book',
  templateUrl: './issue-book.component.html',
  styleUrls: ['./issue-book.component.css']
})
export class IssueBookComponent implements OnInit {

  
  constructor(private http: HttpClient,private add: AuthService,private router: Router) { }
  issueBook(issueBookForm: NgForm) {
    this.http.post(`${this.add.baseURL}/issuedbook`, issueBookForm.value).subscribe(response => {
    if (response != null) {
      alert('Book Issued');
      this.router.navigate(['/show-issued-books']);
    } else {
      alert('Failed to issue the book');
    }
    });
  }

  ngOnInit() {
  }

}


