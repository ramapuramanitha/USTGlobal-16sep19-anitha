import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
constructor(private http: HttpClient, private add: AuthService , private router: Router) { }
addBook(addBookForm: NgForm) {
  this.http.post(`${this.add.baseURL}/addbook`, addBookForm.value).subscribe(response => {
if (response != null) {
  alert('Book Added');
  this.router.navigate(['/diplay-book']);
 } else {
    alert('failed to add book');
  }
  });
}
  ngOnInit() {
  }

}
